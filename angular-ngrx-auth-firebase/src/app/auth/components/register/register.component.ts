import { User } from './../../model/user';
import { AppState } from './../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { PasswordValidator } from './../../../shared/validators/password-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as actions from './../../store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  passwordGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      matchingPasswords: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.minLength(6)
        ]],
        confirmPassword: ['', Validators.required]
      }, PasswordValidator.matchingPasswords('password', 'confirmPassword') //group validator
      )
    });

    this.passwordGroup = this.form.controls.matchingPasswords;
  }

  onSignUp() {

    this.store.dispatch(
      new actions.SignUpRequestedAction({user: new User(
        this.form.value.email, 
        this.form.value.matchingPasswords.password
      )})
    );
  }

}
