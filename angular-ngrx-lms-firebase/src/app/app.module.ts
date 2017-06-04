import { EffectsModule } from '@ngrx/effects';
import { initialState, reducers } from './store/reducers';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { environment } from './../environments/environment';
import { MainModule } from './main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, initialState),
    EffectsModule.forRoot()//,
    //not working yet
    //!environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [
    AuthGuard,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
