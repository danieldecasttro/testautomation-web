import {
  validCredentials,
  invalidEmails,
  invalidPasswords,
} from './data/testUsers';
import { createPage } from './page-factory/factory';
import {
  assertLocalStorageKeyValue,
  assertText,
  assertElementVisible,
  assertElementNotVisible,
} from './helpers/assertions';

const envConfig = require('./env.config');
// Default to 'development' if no TEST_ENV is provided by the execution script in package.json
const env = process.env.TEST_ENV || 'development';

fixture('Login')
  .page(envConfig[env].baseUrl)
  .beforeEach(async (t) => {
    // Create an instance of the Login page
    t.ctx.loginPage = createPage('login');
  });

test('Validate the page layout: h1 header content', async (t) => {
  await assertText(t.ctx.loginPage.headerSelector, t.ctx.loginPage.headerText);
});

test('Validate the page layout: "login" section visibility', async (t) => {
  await assertElementVisible(t.ctx.loginPage.loginSectionSelector);
});

test('Validate the page layout: footer visibility', async (t) => {
  await assertElementVisible(t.ctx.loginPage.footerSelector);
});

test('Validate the page layout: footer content', async (t) => {
  await assertText(t.ctx.loginPage.footerSelector, t.ctx.loginPage.footerText);
});

// Iterates over the elements of the validCredentials array and use them in the following test
validCredentials.forEach((user) => {
  test('Successful login', async (t) => {
    // Perform login action
    await t.ctx.loginPage.login(user.email, user.password);

    // Create an instance of the Content page
    const contentPage = createPage('content');

    // Assert that the logged email was stored in the key "logged" in Local Storage
    await assertLocalStorageKeyValue('logged', user.email);

    // Assert that the navigation nav is shown and the login section is NOT shown
    await assertElementVisible(contentPage.navigationNavSelector);
    await assertElementNotVisible(t.ctx.loginPage.loginSectionSelector);

    // Assert that the content text is right
    await assertText(
      contentPage.contentSectionSelector,
      contentPage.contentText,
    );
  });
});

invalidEmails.forEach((user) => {
  test(`Failed login - invalid email: ${user.issue}`, async (t) => {
    // Perform login action
    await t.ctx.loginPage.login(user.email, user.password);

    // Create an instance of the Content page
    const contentPage = createPage('content');

    // Assert that the logged email was stored in the key "logged" in local Storage
    await assertLocalStorageKeyValue('logged', null);

    // Assert that the login section is still shown and the navigation nav is NOT shown
    await assertElementVisible(t.ctx.loginPage.loginSectionSelector);
    await assertElementNotVisible(contentPage.navigationNavSelector);

    // Assert that the content text is right
    await assertText(
      t.ctx.loginPage.headerSelector,
      t.ctx.loginPage.headerText,
    );
  });
});

invalidPasswords.forEach((user) => {
  test(`Failed login - invalid passwords: ${user.issue}`, async (t) => {
    // Perform login action
    await t.ctx.loginPage.login(user.email, user.password);

    // Create an instance of the Content page
    const contentPage = createPage('content');

    // Assert that the logged email was stored in the key "logged" in local Storage
    await assertLocalStorageKeyValue('logged', null);

    // Assert that the login section is still shown and the navigation nav is NOT shown
    await assertElementVisible(t.ctx.loginPage.loginSectionSelector);
    await assertElementNotVisible(contentPage.navigationNavSelector);

    // Assert that the content text is right
    await assertText(
      t.ctx.loginPage.headerSelector,
      t.ctx.loginPage.headerText,
    );
  });
});
