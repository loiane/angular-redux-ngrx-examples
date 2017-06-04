import { Lesson } from './../../lessons/models/lesson';
import { Course } from './../models/course';
import { Action } from '@ngrx/store';
import { type } from './../../store/util';

export const CoursesActionTypes = {
    COURSES_LOAD_REQUESTED: type('[Course] Load All Courses Requested'),
    COURSES_LOAD_COMPLETED: type('[Course] Load All Courses Completed'),

    COURSE_SELECTED: type('[Course] Course Selected'),

    COURSE_LESSONS_LOAD_REQUESTED: type('[Course] Load Course Lessons Requested'),
    COURSE_LESSONS_LOAD_COMPLETED: type('[Course] Load Course Lessons Completed'),

    COURSES_ERROR:     type('[Course] -Courses Error-')
};

export class CoursesPayload {
    constructor(public courses: Course[]) { }
}

export class CourseLessonsPayload {
    constructor(public lessons: Lesson[]) { }
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

export class CourseSelectedAction implements Action {
    type = CoursesActionTypes.COURSE_SELECTED;

    constructor(public payload: {url}) { }
}

export class LoadCourseLessonsRequestedAction implements Action {
    type = CoursesActionTypes.COURSE_LESSONS_LOAD_REQUESTED;

    constructor(public payload: {url}) { }
}

export class LoadCourseLessonsCompletedAction implements Action {
    type = CoursesActionTypes.COURSE_LESSONS_LOAD_COMPLETED;

    constructor(public payload: CourseLessonsPayload) { }
}


export type CoursesAction
    = LoadAllCoursesRequestedAction
    | LoadAllCoursesCompletedAction
    | CourseSelectedAction
    | LoadCourseLessonsRequestedAction
    | LoadCourseLessonsCompletedAction
    | CourseErrorAction;
