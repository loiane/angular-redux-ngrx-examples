import { Task } from './../../model/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input('tasks') tasks$: Observable<Task[]>;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() complete: EventEmitter<any> = new EventEmitter(false);

  onRemove(task){
    this.remove.emit(task);
  }

  onUpdate(task, changes){
    this.complete.emit({task: task, updates: changes});
  }

  constructor() { }

  ngOnInit() {
  }

}
