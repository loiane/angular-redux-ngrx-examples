import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesService } from './../courses.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

import * as actions from './../store/courses.actions';
import * as course from './../store/courses.reducer';
import * as states from './../../ngrx/reducers';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private coursesService: CoursesService,
    private store: Store<states.AppState>,
    private router: Router
    ) { 
      this.store.dispatch(
        new actions.LoadAllCoursesRequestedAction()
      );
    }

  ngOnInit() {
    //this.courses$ = this.coursesService.findAllCourses();

    this.courses$ = this.store.select(states.getCourses);

    this.isLoading$ = this.store.select(states.getIsLoadingCourses);  
  }

  goToCourseDetail(url){
    this.router.navigate([`courses/${url}`]);
  }

}
