import { CoursesService } from './../courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from './../models/course';
//import { Lesson } from './../../lessons/lesson';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  course$: Observable<Course>;
  private subscription: Subscription;
  courseUrl: string;
  //lessons: Lesson[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.courseUrl = params['url'];
        this.course$ = this.coursesService.findCourseByUrl(this.courseUrl);
        //const lessons$ = this.coursesService.loadFirstLessonsPage(this.courseUrl, 3);
        //lessons$.subscribe(lessons => this.lessons = lessons);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
