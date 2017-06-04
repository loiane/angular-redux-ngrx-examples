import { AngularNgrxLmsFirebasePage } from './app.po';

describe('angular-ngrx-lms-firebase App', () => {
  let page: AngularNgrxLmsFirebasePage;

  beforeEach(() => {
    page = new AngularNgrxLmsFirebasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
