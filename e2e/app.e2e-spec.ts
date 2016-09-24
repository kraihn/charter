import { CharterPage } from './app.po';

describe('charter App', function() {
  let page: CharterPage;

  beforeEach(() => {
    page = new CharterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
