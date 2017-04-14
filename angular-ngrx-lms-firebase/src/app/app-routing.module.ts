import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: 'app/main/main.module#MainModule' }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}