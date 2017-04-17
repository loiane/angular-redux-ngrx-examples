import { AppState } from './../../../ngrx/app.state';
import { AuthState } from './../../store/auth.state';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as actions from './../../store/auth.actions';
import * as states from './../../../ngrx/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    //private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  onLogin() {

    this.store.dispatch(
      new actions.LoginRequestedAction({user: this.form.value})
    );
    /*this.authService.signIn(this.form.value)
      .subscribe(user => {
        if (user.uid){
          this.router.navigate(['/home']);
        } 
      });*/
  }
}
