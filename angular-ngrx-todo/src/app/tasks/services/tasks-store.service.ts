import { Store } from '@ngrx/store';
import { Task } from './../model/task';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import * as actions from './../store/task-actions';

@Injectable()
export class TasksStoreService {

  tasks$: Observable<Task[]>;

  constructor(
    private store: Store<any>
  ) {
    this.tasks$ = store.select('tasks') as Observable<Task[]>;
    store.dispatch(new actions.LoadAction());
  }

  createTask(title: string) {
    this.store.dispatch(
      new actions.CreateAction(new actions.TaskPayload(new Task(title)))
    );
  }

  updateTask(task: Task, updates: any) {
    this.store.dispatch(
      new actions.UpdateAction(new actions.TaskUpdatePayload(task.id, updates))
    );
  }

  removeTask(task: Task) {
    this.store.dispatch(
      new actions.RemoveAction(new actions.TaskRemovePayload(task.id))
    );
  }
}
