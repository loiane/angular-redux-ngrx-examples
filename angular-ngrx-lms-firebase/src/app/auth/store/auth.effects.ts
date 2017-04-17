import { LogoutCompletedAction } from './auth.actions';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { go } from '@ngrx/router-store';

import * as auth from './../store/auth.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router
    ) { }

    @Effect()
    loginAction$: Observable<Action> = this.actions$
        .ofType(auth.AuthActionTypes.LOGIN_REQUESTED)
        .map(action => action.payload)
        .switchMap(payload => this.authService.signIn(payload.user)
            .map(res => (new auth.LoginCompletedAction(new auth.AuthUserPayload(res))))
            .do(() => this.router.navigate(['/home']))
            .catch((error) => Observable.of(new auth.AuthErrorAction({error: error})))
    );

    @Effect()
    logoutAction$: Observable<Action> = this.actions$
        .ofType(auth.AuthActionTypes.LOGOUT_REQUESTED)
        .map(action => action.payload)
        .switchMap(payload => this.authService.signOut()
            .map(res => (new auth.LogoutCompletedAction()))
            .do(() => this.router.navigate(['/']))
            .catch((error) => Observable.of(new auth.AuthErrorAction({error: error})))
    );

    @Effect()
    signUpAction$: Observable<Action> = this.actions$
        .ofType(auth.AuthActionTypes.SIGNUP_REQUESTED)
        .map(action => action.payload)
        .switchMap(payload => this.authService.signUp(payload.user)
            .map(res => (new auth.SignUpCompletedAction(new auth.AuthUserPayload(res))))
            .do(() => this.router.navigate(['/login']))
            .catch((error) => Observable.of(new auth.AuthErrorAction({error: error})))
    );
}
