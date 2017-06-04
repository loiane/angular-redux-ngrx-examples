import { Lesson } from './../models/lesson';
import { Action } from '@ngrx/store';
import { type } from './../../store/util';

export const LessonActionTypes = {
    LESSON_SELECTED: type('[Lesson] -LESSON Selected-'),
    LESSON_ERROR: type('[Lesson] -LESSON Error-')
};

export class LessonPayload {
    constructor(public lessons: Lesson) { }
}

export class LessonSelectedAction implements Action {
    type = LessonActionTypes.LESSON_SELECTED;

    constructor(public payload: {url}) { }
}

export class ErrorAction implements Action {
    type = LessonActionTypes.LESSON_ERROR;

    constructor(public payload: any) { }
}

export type LessonsAction
    = LessonSelectedAction
    | ErrorAction;
