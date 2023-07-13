import { Selector, t } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.loginSection = Selector('#login');
    this.header = Selector('h1');
    this.headerText =
      "Automation doesn't stop at testing, it's just a beginning!";
    this.emailInput = Selector('#email');
    this.passwordInput = Selector('#password');
    this.loginButton = Selector('#loginButton');
    this.footer = Selector('footer');
    this.footerText = 'Thank you for participating!';
  }

  async login(email, password) {
    // Enter the email if it's provided
    if (email !== '') {
      await t.typeText(this.emailInput, email);
    }
    // Enter the password if it's provided
    if (password !== '') {
      await t.typeText(this.passwordInput, password);
    }
    await t.click(this.loginButton);
  }
}
