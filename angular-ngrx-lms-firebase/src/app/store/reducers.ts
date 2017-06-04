import { AuthState, authInitialState } from './../auth/store/auth.state';
import * as fromAuth from './../auth/store/auth.reducer';
import { createSelector } from 'reselect';

export interface AppState {
  //router: RouterState,
  auth: AuthState;
};

export const reducers = {
    auth: fromAuth.authReducer
}

export const initialState: AppState  = {
  auth: authInitialState
}

// AUTH
export const getAuthState = (state: AppState) => state.auth;

export const getAuthUserData = createSelector(getAuthState, fromAuth.getUserData);
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.getIsUserLoggedIn);
export const getAuthError = createSelector(getAuthState, fromAuth.getError);
