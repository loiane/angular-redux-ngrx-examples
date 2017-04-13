import { Task } from './../model/task';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { TasksService } from './../services/tasks.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';

import * as taskActions from './task-actions';

@Injectable()
export class TaskEffects {

    constructor(
        private api: TasksService,
        private actions$: Actions
    ) { }

    @Effect()
    loadAction$: Observable<Action> = this.actions$
        .ofType(taskActions.ActionTypes.LOAD)
        .switchMap(() => this.api.loadTasks()
            .map(res => new taskActions.LoadCompletedAction({tasks: res}))
            .catch(() => Observable.of({ type: taskActions.ActionTypes.LOAD_ERROR }))
    );

    @Effect()
    createAction$: Observable<Action> = this.actions$
        .ofType(taskActions.ActionTypes.CREATE)
        .map(action => action.payload.task)
        .switchMap(payload => this.api.createTask(payload)
            .map(res => new taskActions.CreateCompletedAction({task: res}))
            .catch(() => Observable.of({ type: taskActions.ActionTypes.CREATE_ERROR }))
    );

    @Effect()
    updateAction$: Observable<Action> = this.actions$
        .ofType(taskActions.ActionTypes.UPDATE)
        .map(action => action.payload)
        .switchMap(payload => this.api.updateTask(payload.taskId, payload.task)
            .map(res => new taskActions.UpdateCompletedAction({task: res}))
            .catch(() => Observable.of({ type: taskActions.ActionTypes.UPDATE_ERROR }))
    );

    @Effect()
    removeAction$: Observable<Action> = this.actions$
        .ofType(taskActions.ActionTypes.REMOVE)
        .map(action => action.payload)
        .switchMap(payload => this.api.deleteTask(payload.taskId)
            .map(res => new taskActions.RemoveCompletedAction({task: res}))
            .catch(() => Observable.of({ type: taskActions.ActionTypes.REMOVE_ERROR }))
    );
}