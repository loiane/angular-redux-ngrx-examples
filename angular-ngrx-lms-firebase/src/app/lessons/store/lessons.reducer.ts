import { AppState } from './../../store/reducers';
import * as course from './../../courses/store/courses.reducer';
import { LessonsAction, LessonActionTypes } from './lessons.actions';
import { LessonState, LessonsModuleState, lessonInitialState } from './lessons.state';
import { createSelector } from 'reselect';

export function lessonReducer(state = lessonInitialState, action: LessonsAction): LessonState {

    switch(action.type) {

        case LessonActionTypes.LESSON_SELECTED: {
            return Object.assign({}, state, {
                selectedLessonUrl: action.payload.url
            });
        }

        default: {
            return state;
        }
    }
}

// APP STATE
const getLessonsModuleState = (state: AppState) => state['lessonsModule'];
const getLessonsState = (state: LessonsModuleState) => state.lessons;
const getLessonsAppState = createSelector(getLessonsModuleState, getLessonsState);

const getSelectedLessonUrlLocal = (state: LessonState) => state.selectedLessonUrl;

export const getSelectedLessonUrl = createSelector(getLessonsAppState, getSelectedLessonUrlLocal);
export const getSelectedLesson = createSelector(course.getCourseLessons, getSelectedLessonUrl,
    (lessons, selectedUrl) => lessons.find(lesson => lesson.url == selectedUrl)
);
