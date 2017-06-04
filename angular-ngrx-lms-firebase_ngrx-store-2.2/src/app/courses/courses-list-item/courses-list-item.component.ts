import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  @Input() course;
  @Output() courseClicked: EventEmitter<string> = new EventEmitter();

  onCourseClick(url){
    this.courseClicked.emit(url);
  }

  constructor() { }

  ngOnInit() {
  }

}
