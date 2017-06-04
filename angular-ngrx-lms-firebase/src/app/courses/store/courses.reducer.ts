import { AppState } from './../../store/reducers';
import { CourseState, courseInitialState, CoursesModuleState } from './courses.state';
import { CoursesActionTypes, CoursesAction } from './courses.actions';
import { createSelector } from 'reselect';

export function courseReducer(state = courseInitialState,
    action: CoursesAction): CourseState {

    switch(action.type) {

        case CoursesActionTypes.COURSES_LOAD_REQUESTED: {
            return Object.assign({}, state, {
                courses: null,
                isLoadingCourses: true,
                selectedCourse: null,
                error: null
            });
        }

        case CoursesActionTypes.COURSES_LOAD_COMPLETED: {
            return Object.assign({}, state, {
                courses: action.payload.courses,
                isLoadingCourses: false,
                selectedCourse: null,
                error: null
            });
        }

         case CoursesActionTypes.COURSE_SELECTED: {
            return Object.assign({}, state, {
                selectedCourse: action.payload.url
            });
        }

        case CoursesActionTypes.COURSES_ERROR: {
            return Object.assign({}, state, {
                courses: null,
                isLoadingCourses: false,
                selectedCourse: null,
                error: action.payload.error
            });
        }

        case CoursesActionTypes.COURSE_LESSONS_LOAD_COMPLETED: {
            return Object.assign({}, state, {
                courseLessons: action.payload.lessons
            });
        }

        default: {
            return state;
        }
    }
}

// APP STATE
const getCourseModuleState = (state: AppState) => state['coursesModule'];
const getCoursesState = (state: CoursesModuleState) => state.courses;
const getCoursesAppState = createSelector(getCourseModuleState, getCoursesState);

// LOCAL MODULE STATE
const getCoursesLocal = (state: CourseState) => state.courses;
const getIsLoadingLocal = (state: CourseState) => state.isLoadingCourses;
const getSelectedUrlLocal = (state: CourseState) => state.selectedCourse;
const getSelectedCourseLocal = createSelector(getCoursesLocal, getSelectedUrlLocal,
    (courses, selectedUrl) => courses.find(course => course.url == selectedUrl)
);
export const getCourseLessonsLocal = (state: CourseState) => state.courseLessons;

// EXPOSED LOCAL STATE
export const getCourses = createSelector(getCoursesAppState, getCoursesLocal);
export const getIsLoadingCourses = createSelector(getCoursesAppState, getIsLoadingLocal);
export const getSelectedCourseUrl = createSelector(getCoursesAppState, getSelectedCourseLocal);
export const getCourseLessons = createSelector(getCoursesAppState, getCourseLessonsLocal);
