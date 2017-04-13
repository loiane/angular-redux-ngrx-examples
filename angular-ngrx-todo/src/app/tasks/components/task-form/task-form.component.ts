import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() createTask: EventEmitter<any> = new EventEmitter(false);

  title: string = '';

  clear(): void {
    this.title = '';
  }

  onSubmit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createTask.emit(title);
    }
    this.clear();
  }

  constructor() { }

  ngOnInit() {
  }

}
