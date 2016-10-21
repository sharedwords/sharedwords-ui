import { SharedwordsUiPage } from './app.po';

describe('sharedwords-ui App', function() {
  let page: SharedwordsUiPage;

  beforeEach(() => {
    page = new SharedwordsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sw works!');
  });
});
