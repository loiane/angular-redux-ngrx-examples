import { Observable } from 'rxjs/Rx';
import { AppState } from './../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as states from './../../ngrx/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() { 
    this.user$ = this.store.select(states.getAuthUserData);
  }

}
