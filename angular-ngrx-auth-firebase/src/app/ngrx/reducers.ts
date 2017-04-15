import { createSelector } from 'reselect';
import { AppState } from './app.state';
import * as fromAuth from './../auth/store/auth.reducer'

export const getAuthState = (state: AppState) => state.auth;

export const getAuthUserData = createSelector(getAuthState, fromAuth.getUserData);
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.getIsUserLoggedIn);
export const getAuthError = createSelector(getAuthState, fromAuth.getError);