import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { LessonsService } from './../lessons.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss']
})
export class LessonFormComponent implements OnInit {

  courseId: string;
  form: FormGroup;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private lessonsService: LessonsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.courseId = queryParams['courseId'];
      }
    );

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      url: ['', Validators.required],
      tags: [''],
      sourceCodeUrl: [''],
      videoUrl: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(){
    /*this.lessonsService.createNewLesson(this.courseId, this.form.value)
      .subscribe(
          () => {
              alert("lesson created succesfully. Create another lesson ?");
              this.form.reset();
          },
          err => alert(`error creating lesson ${err}`)
      );*/
  }

  isValid(name){
    return this.form.controls[name].touched &&
      !this.form.controls[name].valid
  }
}
