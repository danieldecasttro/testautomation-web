import { Selector, t } from 'testcafe';

export default class ContentPage {
  constructor() {
    this.navigationNav = Selector('#navigation');
    this.userSection = Selector('#user i');
    this.logoutButton = Selector('#logout');
    this.contentSection = Selector('#content');
    this.contentText = 'Lorem ipsum egestas posuere';
  }

  async clickUser() {
    await t.click(this.userSection);
  }

  async logout() {
    await t.click(this.logoutButton);
  }
}
