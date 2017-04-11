# @ngrx examples

[Angular](https://angular.io/) + [ngrx](https://github.com/ngrx) examples

##Examples

All examples are using Angular 4.x and created with Angular CLI 1.x

### Counter ([source](https://github.com/loiane/angular-redux-ngrx-examples/tree/master/angular-ngrx-counter))
##### Summary
A counter which can be incremented, decremented, with the option to increment or decrement async and reset the counter. This is the most basic ngrx example, with no ajax integration.
##### Demonstrates
1. Creating a basic reducer
2. Selecting a slice of state 
3. Using the async pipe
4. Dispatching actions from a component

### Todo CRUD ([source](https://github.com/loiane/angular-redux-ngrx-examples/tree/master/angular-ngrx-todo))
##### Summary
Simple TODO application with CRUD operations.
##### Demonstrates
1. Initial reducer state 
2. Managing collections in reducer 
3. Using the async pipe with the enhanced ngFor (Angular >=4.x)
4. Dispatching actions from a service
5. Intercepting ajax requests with ngrx/effects
6. Sample node server API
