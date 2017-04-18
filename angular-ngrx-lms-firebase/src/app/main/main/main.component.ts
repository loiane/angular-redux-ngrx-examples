import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as actions from './../../auth/store/auth.actions';
import * as states from './../../ngrx/reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  error$: Observable<string>;
  user$: Observable<any>;

  constructor(private store: Store<states.AppState>) { }

  ngOnInit() {
    this.error$ = this.store.select(states.getAuthError);
    this.user$ = this.store.select(states.getAuthUserData);
  }

  onLogout(){
    this.store.dispatch(
      new actions.LogoutRequestedAction()
    );
  }
}
