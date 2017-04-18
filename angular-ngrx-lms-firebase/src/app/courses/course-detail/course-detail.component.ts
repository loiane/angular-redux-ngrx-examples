import { Store } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { CoursesService } from './../courses.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from './../models/course';
//import { Lesson } from './../../lessons/lesson';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as fromRoot from './../../ngrx/reducers';
import * as actions from './../store/courses.actions';
import * as course from './../store/courses.reducer';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  course$: Observable<Course>;
  private subscription: Subscription;
  //lessons: Lesson[];

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.AppState>
  ) { 
    this.subscription = route.params
      .select<string>('url')
      .map(url => new actions.CourseSelectedAction({url}))
      .subscribe(store);
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

    this.course$ = this.store.select(fromRoot.getSelectedCourseUrl);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
