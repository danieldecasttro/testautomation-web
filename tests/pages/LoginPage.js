import { Selector, t } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.loginSectionSelector = Selector('#login');
    this.headerSelector = Selector('h1');
    this.headerText =
      "Automation doesn't stop at testing, it's just a beginning!";
    this.emailInputSelector = Selector('#email');
    this.passwordInputSelector = Selector('#password');
    this.loginButtonSelector = Selector('#loginButton');
    this.footerSelector = Selector('footer');
    this.footerText = 'Thank you for participating!';
  }

  async login(email, password) {
    // Enter the email if it's provided
    if (email !== '') {
      await t.typeText(this.emailInputSelector, email);
    }
    // Enter the password if it's provided
    if (password !== '') {
      await t.typeText(this.passwordInputSelector, password);
    }
    await t.click(this.loginButtonSelector);
  }
}
