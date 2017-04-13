import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { taskReducer } from './tasks/store/task-reducer';

import { AppComponent } from './app.component';

const StoreDevtools = StoreDevtoolsModule.instrumentOnlyWithExtension();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({
      tasks: taskReducer
    }),
    StoreDevtools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
