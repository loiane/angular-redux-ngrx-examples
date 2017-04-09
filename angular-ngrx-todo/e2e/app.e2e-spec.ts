import { AngularNgrxTodoPage } from './app.po';

describe('angular-ngrx-todo App', () => {
  let page: AngularNgrxTodoPage;

  beforeEach(() => {
    page = new AngularNgrxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
