import { AuthGuard } from './auth/guards/auth.guard';
import { StartComponent } from './main/start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartComponent },
  {
    path: 'courses',
    loadChildren: 'app/courses/courses.module#CoursesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'lessons',
    loadChildren: 'app/lessons/lessons.module#LessonsModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
