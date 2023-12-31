import { ClientFunction } from 'testcafe';
import { validCredentials } from './data/testUsers';
import { createPage } from './page-factory/factory';
import {
  assertLocalStorageKeyValue,
  assertElementVisible,
  assertElementNotVisible,
} from './helpers/assertions';

const envConfig = require('./env.config');
// Default to development if no TEST_ENV is provided by the execution script in package.json
const env = process.env.TEST_ENV || 'development';

const getLocalStorageItem = ClientFunction((key) => {
  return localStorage.getItem(key);
});

fixture('Logout')
  .page(envConfig[env].baseUrl)
  .beforeEach(async (t) => {
    // Perform login
    t.ctx.loginPage = createPage('login');
    await t.ctx.loginPage.login(
      validCredentials[0].email,
      validCredentials[0].password,
    );

    // After performing the login we need an instance of the Content page
    t.ctx.contentPage = createPage('content');
  });

test('Successful logout', async (t) => {
  await t.ctx.contentPage.clickUser();
  await t.ctx.contentPage.logout();

  // Assert that the key "logged" was removed from local Storage
  await assertLocalStorageKeyValue('logged', null);

  // Assert that the navigation nav is NOT shown and the login section is shown
  await assertElementNotVisible(t.ctx.contentPage.navigationNavSelector);
  await assertElementVisible(t.ctx.loginPage.loginSectionSelector);
});
