import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './store/task.effects';
import { FormsModule } from '@angular/forms';
import { TasksStoreService } from './services/tasks-store.service';
import { TasksService } from './services/tasks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { StoreModule } from "@ngrx/store";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    EffectsModule.run(TaskEffects)
  ],
  declarations: [
    TasksComponent, 
    TaskItemComponent, 
    TasksListComponent, 
    TaskFormComponent
  ],
  providers: [
    TasksService,
    TasksStoreService,
    TaskEffects
  ]
})
export class TasksModule { }
