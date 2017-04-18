import { Course } from './../models/course';
import { ActionCreatorFactory } from './../../ngrx/ngrx-action-creator-factory';
import { Action } from '@ngrx/store';
import { type } from './../../ngrx/util';

export const CoursesActionTypes = {
    COURSES_LOAD_REQUESTED: type('[Course] Load All Courses Requested'),
    COURSES_LOAD_COMPLETED: type('[Course] Load All Courses Completed'),

    COURSES_ERROR:     type('[Course] -Courses Error-')
};

export class CoursesPayload {
    constructor(public courses: Course[]) { }
}

export class LoadAllCoursesRequestedAction implements Action {
    type = CoursesActionTypes.COURSES_LOAD_REQUESTED;

    constructor(public payload = null) { }
} 

export class LoadAllCoursesCompletedAction implements Action {
    type = CoursesActionTypes.COURSES_LOAD_COMPLETED;

    constructor(public payload: CoursesPayload) { }
} 

export class CourseErrorAction implements Action {
    type = CoursesActionTypes.COURSES_ERROR;

    constructor(public payload: any) { }
}


export type CoursesAction
    = LoadAllCoursesRequestedAction
    | LoadAllCoursesCompletedAction
    | CourseErrorAction;
