import { Task } from './../../model/task';
import { Observable } from 'rxjs/Observable';
import { TasksStoreService } from './../../services/tasks-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(private taskStoreService: TasksStoreService) { }

  ngOnInit() {
    this.tasks$ = this.taskStoreService.tasks$;
  }

  onCreateTask(title) {
    this.taskStoreService.createTask(title);
  }

  onRemoveTask(task) {
    this.taskStoreService.removeTask(task);
  }

  onUpdateTask(event) {
    this.taskStoreService.updateTask(event.task, event.updates);
  }

}
