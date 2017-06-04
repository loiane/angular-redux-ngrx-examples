import { LessonsService } from './lessons.service';
import { SharedModule } from './../shared/shared.module';
import { LessonsRoutingModule } from './lessons.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { StoreModule } from '@ngrx/store';

import { lessonReducer } from './store/lessons.reducer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LessonsRoutingModule,
    SharedModule,
    StoreModule.forFeature('lessonsModule', {lessons: lessonReducer})
  ],
  declarations: [
    LessonsListComponent,
    LessonDetailComponent,
    LessonFormComponent
  ],
  providers: [ LessonsService ],
  exports: [ LessonsListComponent ]
})
export class LessonsModule { }
