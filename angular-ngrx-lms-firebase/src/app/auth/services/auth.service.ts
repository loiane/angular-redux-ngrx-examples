import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  //user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    //this.user = afAuth.authState;
  }

  signIn(user: User) {
    return this.fromFirebaseAuthPromise(
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    );
  }

  signOut() {
    return this.fromFirebaseAuthPromise(
      this.afAuth.auth.signOut()
    );
  }

  signUp(user: User) {
    return this.fromFirebaseAuthPromise(
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    );
  }

  private fromFirebaseAuthPromise(promise): Observable<any> {
    return Observable.fromPromise(<Promise<any>>promise);
  }

}
