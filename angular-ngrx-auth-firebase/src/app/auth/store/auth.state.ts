export interface AuthState {
    userData: any; //firebase user model
    isLoggedIn: boolean,
    error: any;
}

export const authInitialState: AuthState = {
    userData: null,
    isLoggedIn: false,
    error: null
}
