import { Selector, t, ClientFunction } from 'testcafe';
import { validCredentials } from './data/testUsers';
import { createPage } from './page-factory/factory';
import { assertDisplayValue, assertText } from './helpers/assertions';

const envConfig = require('./env.config');
// Default to development if no TEST_ENV is provided by the execution script in package.json
const env = process.env.TEST_ENV || 'development';

fixture('Content')
  .page(envConfig[env].baseUrl)
  .beforeEach(async (t) => {
    // Create an instance of the Login page
    t.ctx.loginPage = createPage('login');
    // Perform login with the first email available in the data source data/testUsers.js
    await t.ctx.loginPage.login(
      validCredentials[0].email,
      validCredentials[0].password,
    );
    // After performing the login we need an instance of the Content page
    t.ctx.contentPage = createPage('content');
  });

test('Validate the page layout: "navigation" nav visibility', async (t) => {
  await assertDisplayValue(t.ctx.contentPage.navigationNavSelector, 'flex');
});

test('Validate the page layout: "user" section visibility', async (t) => {
  await assertDisplayValue(
    t.ctx.contentPage.userSectionSelector,
    'inline-block',
  );
});

test('Validate the page layout: "content" section visibility', async (t) => {
  await assertDisplayValue(t.ctx.contentPage.contentSectionSelector, 'flex');
});

test('Validate the page content', async (t) => {
  await assertText(
    t.ctx.contentPage.contentSectionSelector,
    t.ctx.contentPage.contentText,
  );
});

test('Validate the page layout: footer visibility', async (t) => {
  await assertDisplayValue(t.ctx.loginPage.footerSelector, 'flex');
});

test('Validate the page layout: footer content', async (t) => {
  await assertText(t.ctx.loginPage.footerSelector, t.ctx.loginPage.footerText);
});
