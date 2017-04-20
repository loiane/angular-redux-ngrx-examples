import { LessonsAction, LessonActionTypes } from './lessons.actions';
import { LessonState, lessonInitialState } from './lessons.state';

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

export const getSelectedLessonUrl = (state: LessonState) => state.selectedLessonUrl;