import { AuthMethods, AuthProviders } from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyAWVytc72KwMjGGwgwfsF11UAPXh4SW248',
    authDomain: 'angular-lms-48d70.firebaseapp.com',
    databaseURL: 'https://angular-lms-48d70.firebaseio.com',
    projectId: 'angular-lms-48d70',
    storageBucket: 'angular-lms-48d70.appspot.com',
    messagingSenderId: '728567730560'
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};