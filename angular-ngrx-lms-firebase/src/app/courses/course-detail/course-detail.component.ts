import { Lesson } from './../../lessons/models/lesson';
import { Store } from '@ngrx/store';
import { CoursesService } from './../courses.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from './../models/course';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as course from './../store/courses.reducer';
import * as actions from './../store/courses.actions';
import { AppState } from './../../store/reducers';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  course$: Observable<Course>;
  private subscription: Subscription;
  url: string;
  lessons$: Observable<Lesson[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit() {
    /*this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.courseUrl = params['url'];
        this.course$ = this.coursesService.findCourseByUrl(this.courseUrl);
        //const lessons$ = this.coursesService.loadFirstLessonsPage(this.courseUrl, 3);
        //lessons$.subscribe(lessons => this.lessons = lessons);
      }
    );*/

    this.subscription = this.route.params
      .switchMap(params => params['url'])
      .do(url => new actions.CourseSelectedAction({url}))
      .do(url => this.store.dispatch(
          new actions.LoadCourseLessonsRequestedAction({url})
      ))
      .subscribe();

    this.course$ = this.store.select(course.getSelectedCourseUrl);
    this.lessons$ = this.store.select(course.getCourseLessons);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
