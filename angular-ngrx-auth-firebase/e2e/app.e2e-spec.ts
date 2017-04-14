import { AngularNgrxAuthFirebasePage } from './app.po';

describe('angular-ngrx-auth-firebase App', () => {
  let page: AngularNgrxAuthFirebasePage;

  beforeEach(() => {
    page = new AngularNgrxAuthFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
