import { Injectable, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { Observable, Subject } from "rxjs/Rx";
import { AngularFireDatabase, FirebaseRef } from "angularfire2";
import { Lesson } from "./models/lesson";

@Injectable()
export class LessonsService {

  sdkDb: any;

  constructor(
    private db: AngularFireDatabase,
    @Inject(FirebaseRef) fb,
    private http: Http
  ) {
    this.sdkDb = fb.database().ref();
  }

  findAllLessons(): Observable<Lesson[]> {
    return this.db.list('lessons')
      //.do(console.log)
      .map(Lesson.fromJsonList);

  }

  findLessonByUrl(url: string): Observable<Lesson> {
    return this.db.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
      .filter(results => results && results.length > 0)
      .map(results => Lesson.fromJson(results[0]));
    //.do(console.log);
  }

  createNewLesson(courseId:string, lesson:any): Observable<any> {

        const lessonToSave = Object.assign({}, lesson, {courseId});

        const newLessonKey = this.sdkDb.child('lessons').push().key;

        let dataToSave = {};

        dataToSave["lessons/" + newLessonKey] = lessonToSave;
        dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;


        return this.firebaseUpdate(dataToSave);
    }

    firebaseUpdate(dataToSave) {
        const subject = new Subject();

        this.sdkDb.update(dataToSave)
            .then(
                val => {
                    subject.next(val);
                    subject.complete();

                },
                err => {
                    subject.error(err);
                    subject.complete();
                }
            );

        return subject.asObservable();
    }

    saveLesson(lessonId:string, lesson): Observable<any> {

        const lessonToSave = Object.assign({}, lesson);
        delete(lessonToSave.$key);

        let dataToSave = {};
        dataToSave[`lessons/${lessonId}`] = lessonToSave;

        return this.firebaseUpdate(dataToSave);


    }

}
