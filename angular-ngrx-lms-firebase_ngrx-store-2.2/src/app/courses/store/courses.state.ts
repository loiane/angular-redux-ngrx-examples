import { Lesson } from './../../lessons/models/lesson';
import { Course } from './../models/course';

export interface CourseState {
    courses: Course[];
    isLoadingCourses: boolean;
    selectedCourse: any;
    error: any;
    courseLessons: Lesson[];
}

export const courseInitialState: CourseState = {
    courses: null,
    isLoadingCourses: true,
    selectedCourse: null,
    error: null,
    courseLessons: null
}