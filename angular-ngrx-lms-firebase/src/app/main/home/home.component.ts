import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<any>;

  /*constructor(private store: Store<states.AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select(states.getAuthUserData);
  }*/

  ngOnInit(){}

}
