import { CoursesService } from './../courses.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as course from './../store/courses.actions';

@Injectable()
export class CourseEffects {
    constructor(
        private coursesService: CoursesService,
        private actions$: Actions,
        private router: Router
    ) { }

    @Effect()
    loadAllCoursesAction$: Observable<Action> = this.actions$
        .ofType(course.CoursesActionTypes.COURSES_LOAD_REQUESTED)
        .switchMap(payload => this.coursesService.findAllCourses()
            .map(res => (new course.LoadAllCoursesCompletedAction(new course.CoursesPayload(res))))
            .catch((error) => Observable.of(new course.CourseErrorAction({error: error})))
    );

    @Effect()
    loadCourseLessonsAction$: Observable<Action> = this.actions$
        .ofType(course.CoursesActionTypes.COURSE_LESSONS_LOAD_REQUESTED)
        .map(action => action.payload.url.payload)
        .switchMap(payload => this.coursesService.loadLessons(payload.url)
            .map(res => (new course.LoadCourseLessonsCompletedAction(new course.CourseLessonsPayload(res))))
            .catch((error) => Observable.of(new course.CourseErrorAction({error: error})))
    );


}
