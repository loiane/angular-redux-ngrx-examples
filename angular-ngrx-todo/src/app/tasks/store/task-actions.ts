import { Task } from './../model/task';
import { Action } from '@ngrx/store';
import { type } from './../../ngrx/util';

export const ActionTypes = {
    LOAD: type('[Task] -LOAD Requested-'),
    LOAD_COMPLETED: type('[Task] -LOAD Completed-'),
    LOAD_ERROR: type('[Task] -LOAD Error-'),

    CREATE: type('[Task] -CREATE Requested-'),
    CREATE_COMPLETED: type('[Task] -CREATE Completed-'),
    CREATE_ERROR: type('[Task] -CREATE Error-'),

    UPDATE: type('[Task] -UPDATE Requested-'),
    UPDATE_COMPLETED: type('[Task] -UPDATE Completed-'),
    UPDATE_ERROR: type('[Task] -UPDATE Error-'),

    REMOVE: type('[Task] -REMOVE Requested-'),
    REMOVE_COMPLETED: type('[Task] -REMOVE Completed-'),
    REMOVE_ERROR: type('[Task] -REMOVE Error-')
};

export class TaskPayload {
    constructor(public task: Task) { }
}

export class TaskUpdatePayload {
    constructor(public taskId: string, public task: Task) { }
}

export class TaskRemovePayload {
    constructor(public taskId: string) { }
}

export class TasksPayload {
    constructor(public tasks: Task[]) { }
}

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: any = null) { }
}

export class LoadCompletedAction implements Action {
    type = ActionTypes.LOAD_COMPLETED;

    constructor(public payload: TasksPayload) { }
}

export class LoadErrorAction implements Action {
    type = ActionTypes.LOAD_ERROR;

    constructor(public payload: string) { }
}

export class CreateAction implements Action {
    type = ActionTypes.CREATE;

    constructor(public payload: TaskPayload) { }
}

export class CreateCompletedAction implements Action {
    type = ActionTypes.CREATE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class CreateErrorAction implements Action {
    type = ActionTypes.CREATE_ERROR;

    constructor(public payload: string) { }
}

export class UpdateAction implements Action {
    type = ActionTypes.UPDATE;

    constructor(public payload: TaskUpdatePayload) { }
}

export class UpdateCompletedAction implements Action {
    type = ActionTypes.UPDATE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class UpdateErrorAction implements Action {
    type = ActionTypes.UPDATE_ERROR;

    constructor(public payload: string) { }
}

export class RemoveAction implements Action {
    type = ActionTypes.REMOVE;

    constructor(public payload: TaskRemovePayload) { }
}

export class RemoveCompletedAction implements Action {
    type = ActionTypes.REMOVE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class RemoveErrorAction implements Action {
    type = ActionTypes.REMOVE_ERROR;

    constructor(public payload: string) { }
}

export type TaskAction
    = LoadAction
    | LoadCompletedAction
    | LoadErrorAction
    | CreateAction
    | CreateCompletedAction
    | CreateErrorAction
    | UpdateAction
    | UpdateCompletedAction
    | UpdateErrorAction
    | RemoveAction
    | RemoveCompletedAction
    | RemoveErrorAction;