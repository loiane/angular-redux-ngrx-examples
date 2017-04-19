import { Subscription } from 'rxjs/Rx';
import { LessonsService } from './../lessons.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit, OnDestroy {

  lesson;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lessonsService: LessonsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.switchMap(params => {
      const lessonUrl = params['url'];
      return this.lessonsService.findLessonByUrl(lessonUrl);
    })
      .subscribe(lesson => this.lesson = lesson);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
