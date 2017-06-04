import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from "./../models/lesson";

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {

  @Input()
  lessons: Lesson[];

  constructor() { }

  ngOnInit() {
  }

}
