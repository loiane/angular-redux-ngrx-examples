import { SharedModule } from './../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/courses.effects';
//import { LessonsModule } from './../lessons/lessons.module';
import { CoursesRoutingModule } from './courses.routing';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    EffectsModule.run(CourseEffects),
    SharedModule
    //LessonsModule
  ],
  declarations: [
    CoursesListComponent, 
    CoursesListItemComponent, 
    CourseDetailComponent
  ],
  providers: [ 
    CoursesService
  ]
})
export class CoursesModule { }
