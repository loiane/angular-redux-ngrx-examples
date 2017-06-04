# @ngrx examples

[Angular](https://angular.io/) + [ngrx](https://github.com/ngrx) examples

Examples used to demonstrate Angular + ngrx use for my [Reactive Angular talk (Portuguese)](https://www.slideshare.net/loianeg/projetos-reativos-com-angular-rxjs-e-redux-ngrx)

##Examples

All examples are using Angular 4.x and created with Angular CLI 1.x

### Counter ([source](https://github.com/loiane/angular-redux-ngrx-examples/tree/master/angular-ngrx-counter))
A counter which can be incremented, decremented, with the option to increment or decrement async and reset the counter. This is the most basic ngrx example, with no ajax integration.
##### Demonstrates
1. Creating a basic reducer
2. Selecting a slice of state 
3. Using the async pipe
4. Dispatching actions from a component

### Todo CRUD ([source](https://github.com/loiane/angular-redux-ngrx-examples/tree/master/angular-ngrx-todo))
Simple TODO application with CRUD operations with node backend.
##### Demonstrates
1. Initial reducer state 
2. Managing collections in reducer 
3. Using the async pipe with the enhanced ngFor (Angular >=4.x)
4. Dispatching actions from a service
5. Intercepting ajax requests with ngrx/effects
6. Sample node server API

### Firebase Auth ([source](https://github.com/loiane/angular-redux-ngrx-examples/tree/master/angular-ngrx-auth-firebase))
Login + Logout + Register screen using Firebase.
##### Demonstrates
1. Initial reducer state 
2. Login screen + Register screen
3. Menu/Navbar with conditional buttons/links
4. Using the async pipe with the enhanced ngIf and ngFor (Angular >=4.x)
5. Dispatching actions
6. Intercepting ajax requests with ngrx/effects
7. Routing from ngrx/effect
8. Auth Guard using ngrx store state
9. Error handling with messages on the screen
10. Firebase

### Simple LMS with Firebase ([source](https://github.com/loiane/angular-redux-ngrx-examples/tree/master/angular-ngrx-lms-firebase))
Simple Learning Management System (list of courses and lessons) with login and CRUD operations using Firebase
##### Demonstrates
1. Initial reducer state 
2. Login screen
3. Multiple reducers
4. Using the async pipe with the enhanced ngIf and ngFor (Angular >=4.x)
5. Dispatching actions from a service
6. Intercepting ajax requests with ngrx/effects
7. Firebase
8. Using ngrx platform (v4) - lazy loading of reducers and app state injection dynamically
