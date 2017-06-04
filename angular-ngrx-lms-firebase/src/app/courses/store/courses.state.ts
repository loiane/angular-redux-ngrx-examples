import { Lesson } from './../../lessons/models/lesson';
import { Course } from './../models/course';

export interface CoursesModuleState {
  courses: CourseState;
}

export interface CourseState {
    courses: Course[];
    isLoadingCourses: boolean;
    selectedCourse: any;
    error: any;
    courseLessons: Lesson[];
}

export const courseInitialState: CourseState = {
    courses: [],
    isLoadingCourses: true,
    selectedCourse: null,
    error: null,
    courseLessons: []
}
