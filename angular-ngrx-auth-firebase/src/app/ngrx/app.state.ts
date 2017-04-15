import { AuthState } from './../auth/store/auth.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
  router: RouterState;
  auth: AuthState
};

