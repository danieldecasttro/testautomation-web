import { Selector, t } from 'testcafe';

export default class ContentPage {
  constructor() {
    this.navigationNavSelector = Selector('#navigation');
    this.userSectionSelector = Selector('#user i');
    this.logoutButtonSelector = Selector('#logout');
    this.contentSectionSelector = Selector('#content');
    this.contentText = 'Lorem ipsum egestas posuere';
  }

  async clickUser() {
    await t.click(this.userSectionSelector);
  }

  async logout() {
    await t.click(this.logoutButtonSelector);
  }
}
