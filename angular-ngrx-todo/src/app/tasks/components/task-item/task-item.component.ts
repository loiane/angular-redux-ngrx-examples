import { Task } from './../../model/task';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() complete: EventEmitter<any> = new EventEmitter(false);

  onRemove(){
    this.remove.emit();
  }

  onComplete(){
    this.complete.emit({
      completed: !this.task.completed
    });
  }

}
