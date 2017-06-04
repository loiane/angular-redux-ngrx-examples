import { Action } from "@ngrx/store";
import { type } from "./../../store/util";

export const AuthActionTypes = {
  LOGIN_REQUESTED: type("[Auth] -LOGIN Requested-"),
  LOGIN_COMPLETED: type("[Auth] -LOGIN Completed-"),

  LOGOUT_REQUESTED: type("[Auth] -LOGOUT Requested-"),
  LOGOUT_COMPLETED: type("[Auth] -LOGOUT Completed-"),

  SIGNUP_REQUESTED: type("[Auth] -SIGNUP Requested-"),
  SIGNUP_COMPLETED: type("[Auth] -SIGNUP Completed-"),

  AUTH_ERROR: type("[Auth] -Auth Error-")
};

export class LoginRequestedAction implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;

  constructor(public payload: {user}) {}
}

export class LoginCompletedAction implements Action {
  readonly type = AuthActionTypes.LOGIN_COMPLETED;

  constructor(public payload: {user}) {}
}

export class AuthErrorAction implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;

  constructor(public payload: any) {}
}

export class LogoutRequestedAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUESTED;

  constructor(public payload?: null) {}
}

export class LogoutCompletedAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;

  constructor(public payload?: null) {}
}

export class SignUpRequestedAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_REQUESTED;

  constructor(public payload: {user}) {}
}

export class SignUpCompletedAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_COMPLETED;

  constructor(public payload: {user}) {}
}

export type AuthAction =
  | LoginRequestedAction
  | LoginCompletedAction
  | LogoutRequestedAction
  | LogoutCompletedAction
  | AuthErrorAction;
