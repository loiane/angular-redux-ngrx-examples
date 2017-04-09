import { RESET, DECREMENT, INCREMENT } from './../reducers/counter';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<number>) { }

  ngOnInit() {
    this.counter$ = this.store.select<number>('counter')
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  incrementAsync() {
    setTimeout(() => {
      this.store.dispatch({ type: INCREMENT });
    }, 1000);
  }

  decrementAsync() {
    setTimeout(() => {
      this.store.dispatch({ type: DECREMENT });
    }, 1000);
  }

  reset(){
		this.store.dispatch({ type: RESET });
	}

}
