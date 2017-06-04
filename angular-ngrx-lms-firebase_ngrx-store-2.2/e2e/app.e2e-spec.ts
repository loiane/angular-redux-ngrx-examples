import { AngularNgrxLmsFirebasePage } from './app.po';

describe('angular-ngrx-lms-firebase App', () => {
  let page: AngularNgrxLmsFirebasePage;

  beforeEach(() => {
    page = new AngularNgrxLmsFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
