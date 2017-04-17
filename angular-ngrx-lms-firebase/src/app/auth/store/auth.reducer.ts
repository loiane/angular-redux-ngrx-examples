import { AppState } from './../../ngrx/app.state';
import { AuthAction, AuthActionTypes, AuthErrorAction } from './auth.actions';
import { AuthState, authInitialState } from './auth.state';
import { State } from '@ngrx/store';

export function authReducer(
    state = authInitialState, action: AuthAction): AuthState {
    switch (action.type) {

        case AuthActionTypes.LOGIN_COMPLETED: {
            return Object.assign({}, state, {
                userData: action.payload.user,
                isLoggedIn: action.payload.user != null,
                error: null
            });
        }

        case AuthActionTypes.AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }

        case AuthActionTypes.LOGOUT_COMPLETED: {
            return Object.assign({}, state, {
                userData: null,
                isLoggedIn: false
            });
        }

        default: {
            return state;
        }
    }
}

export const getUserData = (state: AuthState) => state.userData;
export const getIsUserLoggedIn = (state: AuthState) => state.isLoggedIn;
export const getError = (state: AuthState) => state.error;