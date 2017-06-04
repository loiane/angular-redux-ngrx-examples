import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
