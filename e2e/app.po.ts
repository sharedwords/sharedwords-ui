import { browser, element, by } from 'protractor';

export class SharedwordsUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sw-root h1')).getText();
  }
}
