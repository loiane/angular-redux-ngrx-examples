import { LessonsService } from './lessons.service';
import { SharedModule } from './../shared/shared.module';
import { LessonsRoutingModule } from './lessons.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsListItemComponent } from './lessons-list-item/lessons-list-item.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LessonsRoutingModule,
    SharedModule
  ],
  declarations: [
    LessonsListComponent, 
    LessonsListItemComponent, 
    LessonDetailComponent, 
    LessonFormComponent
  ],
  providers: [ LessonsService ],
  exports: [ LessonsListComponent ]
})
export class LessonsModule { }
