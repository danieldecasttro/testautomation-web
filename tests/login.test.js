import { Selector, t, ClientFunction } from 'testcafe';
import {
  validCredentials,
  invalidEmails,
  invalidPasswords,
} from './data/testUsers';
import { createPage } from './page-factory/factory';
import { getText } from './helpers/utils';

const getLocalStorageItem = ClientFunction((key) => {
  return localStorage.getItem(key);
});

fixture('Login')
  .page('http://localhost:8080')
  .beforeEach(async (t) => {
    // Instantiate an object for the LoginPage class
    t.ctx.loginPage = createPage('login');
  });

test('Validate the page layout: h1 header content', async (t) => {
  const { loginPage } = t.ctx;
  const headerText = await getText(loginPage.header);
  await t.expect(headerText).contains(loginPage.headerText);
});

test('Validate the page layout: "login" section visibility', async (t) => {
  const { loginPage } = t.ctx;
  await t
    .expect(Selector(loginPage.loginSection).getStyleProperty('display'))
    .eql('flex');
});

test('Validate the page layout: footer visibility', async (t) => {
  const { loginPage } = t.ctx;
  await t
    .expect(Selector(loginPage.footer).getStyleProperty('display'))
    .eql('flex');
});

test('Validate the page layout: footer content', async (t) => {
  const { loginPage } = t.ctx;
  const footerText = await getText(loginPage.footer);
  await t.expect(footerText).contains(loginPage.footerText);
});

validCredentials.forEach((user) => {
  test('Successful login', async (t) => {
    const { loginPage } = t.ctx;
    // Perform login action
    await loginPage.login(user.email, user.password);

    // Assert that the logged email was stored in the key "logged" in local Storage
    const loggedInUser = await getLocalStorageItem('logged');
    await t.expect(loggedInUser).eql(user.email);

    // Assert that the navigation nav is shown and the login section is NOT shown
    const contentPage = createPage('content');
    await t
      .expect(Selector(loginPage.loginSection).getStyleProperty('display'))
      .eql('none');
    await t
      .expect(Selector(contentPage.navigationNav).getStyleProperty('display'))
      .eql('flex');

    // Assert that the content text is right
    const contentText = await getText(contentPage.contentSection);
    await t.expect(contentText).contains(contentPage.contentText);
  });
});

invalidEmails.forEach((user) => {
  test(`Failed login - invalid email: ${user.issue}`, async (t) => {
    const { loginPage } = t.ctx;
    // Perform login action
    await loginPage.login(user.email, user.password);

    // Assert that the logged email was stored in the key "logged" in local Storage
    const loggedInUser = await getLocalStorageItem('logged');
    await t.expect(loggedInUser).eql(null);

    // Assert that the login section is shown and the navigation nav is NOT shown
    await t
      .expect(Selector(loginPage.loginSection).getStyleProperty('display'))
      .eql('flex');

    // Assert that the content text is right
    const headerText = await getText(loginPage.header);
    await t.expect(headerText).contains(loginPage.headerText);
  });
});

invalidPasswords.forEach((user) => {
  test(`Failed login - invalid passwords: ${user.issue}`, async (t) => {
    const { loginPage } = t.ctx;
    // Perform login action
    await loginPage.login(user.email, user.password);

    // Assert that the logged email was stored in the key "logged" in local Storage
    const loggedInUser = await getLocalStorageItem('logged');
    await t.expect(loggedInUser).eql(null);

    // Assert that the login section is shown and the navigation nav is NOT shown
    await t
      .expect(Selector(loginPage.loginSection).getStyleProperty('display'))
      .eql('flex');

    // Assert that the content text is right
    const headerText = await getText(loginPage.header);
    await t.expect(headerText).contains(loginPage.headerText);
  });
});
