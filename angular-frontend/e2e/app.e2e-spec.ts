import { AngularFrontendPage } from './app.po';

describe('angular-frontend App', () => {
  let page: AngularFrontendPage;

  beforeEach(() => {
    page = new AngularFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
