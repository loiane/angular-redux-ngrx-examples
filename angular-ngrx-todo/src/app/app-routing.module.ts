import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'tasks', loadChildren: 'app/tasks/tasks.module#TasksModule' },
            { path: '', pathMatch: 'full', redirectTo: 'tasks' }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}