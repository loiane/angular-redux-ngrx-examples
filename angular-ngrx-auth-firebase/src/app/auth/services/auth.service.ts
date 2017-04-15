import { User } from './../model/user';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { AngularFire, AngularFireAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    public af: AngularFire
  ) {
    /*this.af.auth.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });*/
  }

  signIn(user: User): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(
        this.af.auth.login({ ...user })
        //this.af.auth.login() //for testing error scenario
    );
  }

  signOut() {
    return this.fromFirebaseAuthPromise(
      this.af.auth.logout()
    );
  }

  signUp(user: User): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(
        this.af.auth.createUser({ ...user })
    );
  }

  private fromFirebaseAuthPromise(promise): Observable<any> {
    return Observable.fromPromise(<Promise<any>>promise);
  }
}
