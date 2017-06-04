import { AngularFireAuth } from 'angularfire2/auth';
import { AuthEffects } from './store/auth.effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.run(AuthEffects)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    AngularFireAuth
  ]
})
export class AuthModule { }
