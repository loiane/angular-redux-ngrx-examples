import { Lesson } from './../models/lesson';

export interface LessonsModuleState {
  lessons: LessonState;
}

export interface LessonState {
    selectedLessonUrl: string;
    error: any;
}

export const lessonInitialState = {
    selectedLessonUrl: null,
    error: null
}
