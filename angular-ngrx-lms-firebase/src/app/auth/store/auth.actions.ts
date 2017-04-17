import { Action } from '@ngrx/store';
import { type } from './../../ngrx/util';

export const AuthActionTypes = {
        LOGIN_REQUESTED: type('[Auth] -LOGIN Requested-'),
        LOGIN_COMPLETED: type('[Auth] -LOGIN Completed-'),

        LOGOUT_REQUESTED: type('[Auth] -LOGOUT Requested-'),
        LOGOUT_COMPLETED: type('[Auth] -LOGOUT Completed-'),

        SIGNUP_REQUESTED: type('[Auth] -SIGNUP Requested-'),
        SIGNUP_COMPLETED: type('[Auth] -SIGNUP Completed-'),

        AUTH_ERROR:     type('[Auth] -Auth Error-')
};

export class AuthUserPayload {
    constructor(public user: any) { }
}

export class LoginRequestedAction implements Action {
    type = AuthActionTypes.LOGIN_REQUESTED;

    constructor(public payload: AuthUserPayload) { }
}

export class LoginCompletedAction implements Action {
    type = AuthActionTypes.LOGIN_COMPLETED;

    constructor(public payload: AuthUserPayload) { }
}

export class AuthErrorAction implements Action {
    type = AuthActionTypes.AUTH_ERROR;

    constructor(public payload: any) { }
}

export class LogoutRequestedAction implements Action {
    type = AuthActionTypes.LOGOUT_REQUESTED;

    constructor(public payload = null) { }
}

export class LogoutCompletedAction implements Action {
    type = AuthActionTypes.LOGOUT_COMPLETED;

    constructor(public payload = null) { }
}

export class SignUpRequestedAction implements Action {
    type = AuthActionTypes.SIGNUP_REQUESTED;

    constructor(public payload: AuthUserPayload) { }
}

export class SignUpCompletedAction implements Action {
    type = AuthActionTypes.SIGNUP_COMPLETED;

    constructor(public payload: AuthUserPayload) { }
}

export type AuthAction
    = LoginRequestedAction
    | LoginCompletedAction
    | LogoutRequestedAction
    | LogoutCompletedAction
    | AuthErrorAction;
