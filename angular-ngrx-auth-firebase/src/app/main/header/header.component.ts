import { Observable } from 'rxjs/Rx';
import { AppState } from './../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as states from './../../ngrx/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('user') user$: Observable<any>;
  @Output() logout: EventEmitter<any> = new EventEmitter(false);

  constructor() { }

  ngOnInit() { }

  signOut() {
    this.logout.emit();
  }
}
