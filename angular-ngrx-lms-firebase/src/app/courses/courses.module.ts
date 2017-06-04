import { AngularFireDatabase } from 'angularfire2/database';
import { courseInitialState } from './store/courses.state';
import { StoreModule } from '@ngrx/store';
import { LessonsModule } from './../lessons/lessons.module';
import { SharedModule } from './../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/courses.effects';
import { CoursesRoutingModule } from './courses.routing';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

import { courseReducer } from './store/courses.reducer';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    EffectsModule.run(CourseEffects),
    StoreModule.forFeature('coursesModule', {courses: courseReducer}),
    SharedModule,
    LessonsModule
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
