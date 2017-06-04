import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as states from './../../store/reducers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<states.AppState>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.store.select(states.getAuthIsLoggedIn);
        //.map(state => state.uid != null)
        //.do(console.log);

        //return true;
  }

}
