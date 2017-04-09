import { AngularNgrxCounterPage } from './app.po';

describe('angular-ngrx-counter App', () => {
  let page: AngularNgrxCounterPage;

  beforeEach(() => {
    page = new AngularNgrxCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
