import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { SharedModule } from './../shared/shared.module';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LessonDetailComponent },
  { path: 'new', component: LessonFormComponent },
  { path: 'edit', component: LessonFormComponent },
  { path: ':url', component: LessonDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
