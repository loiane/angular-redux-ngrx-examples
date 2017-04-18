import { Course } from './../models/course';

export interface CourseState {
    courses: Course[];
    isLoadingCourses: boolean;
    selectedCourse: any;
    error: any;
}

export const courseInitialState: CourseState = {
    courses: null,
    isLoadingCourses: true,
    selectedCourse: null,
    error: null
}