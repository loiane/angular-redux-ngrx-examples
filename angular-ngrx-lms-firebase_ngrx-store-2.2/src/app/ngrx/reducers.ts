import { LessonState } from './../lessons/store/lessons.state';
import { CourseState } from './../courses/store/courses.state';
import { AuthState } from './../auth/store/auth.state';
import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromAuth from './../auth/store/auth.reducer';
import * as fromCourse from './../courses/store/courses.reducer';
import * as fromLesson from './../lessons/store/lessons.reducer';


export interface AppState {
  //router: RouterState,
  auth: AuthState;
  course: CourseState;
  lesson: LessonState;
};

const reducers = {
    auth: fromAuth.authReducer,
    course: fromCourse.courseReducer,
    lesson: fromLesson.lessonReducer
}

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return productionReducer(state, action);
  }
}


// AUTH
export const getAuthState = (state: AppState) => state.auth;

export const getAuthUserData = createSelector(getAuthState, fromAuth.getUserData);
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.getIsUserLoggedIn);
export const getAuthError = createSelector(getAuthState, fromAuth.getError);

// COURSES
export const getCourseState = (state: AppState) => state.course;

export const getCourses = createSelector(getCourseState, fromCourse.getCourses);
export const getIsLoadingCourses = createSelector(getCourseState, fromCourse.getIsLoading);
export const getSelectedCourseUrl = createSelector(getCourseState, fromCourse.getSelectedCourse);
export const getCourseLessons = createSelector(getCourseState, fromCourse.getCourseLessons);

// LESSONS
export const getLessonState = (state: AppState) => state.lesson;

export const getSelectedLessonUrl = createSelector(getLessonState, fromLesson.getSelectedLessonUrl);
export const getSelectedLesson = createSelector(getCourseLessons, getSelectedLessonUrl, 
    (lessons, selectedUrl) => lessons.find(lesson => lesson.url == selectedUrl)
);