import { Task } from './../model/task';
import { Action, ActionReducer } from '@ngrx/store';
import { TaskAction, ActionTypes } from './task-actions';

export const taskReducer: ActionReducer<Task[]> = (
        state: Task[] = [], action: TaskAction) => {

    switch (action.type) {

        case ActionTypes.LOAD_COMPLETED:
            return [...state, ...action.payload.tasks];

        case ActionTypes.CREATE_COMPLETED:
            return [...state, action.payload.task];

        case ActionTypes.UPDATE_COMPLETED:
            return state.map((task: Task) => {
                return task.id === action.payload.task.id ? action.payload.task : task;
        });    

        case ActionTypes.REMOVE_COMPLETED:
            return state.filter((task: Task) => {
                return task.id !== action.payload.task.id;
            });

        default:
            return state;
    }
};
