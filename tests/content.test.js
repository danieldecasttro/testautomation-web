import { Selector, t, ClientFunction } from 'testcafe';
import { validCredentials } from './data/testUsers';
import { createPage } from './page-factory/factory';
import { getText } from './helpers/utils';

const getLocalStorageItem = ClientFunction((key) => {
  return localStorage.getItem(key);
});

fixture('Content')
  .page('http://localhost:8080')
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
  const { contentPage } = t.ctx;
  await t
    .expect(Selector(contentPage.navigationNav).getStyleProperty('display'))
    .eql('flex');
});

test('Validate the page layout: "user" section visibility', async (t) => {
  const { contentPage } = t.ctx;
  await t
    .expect(Selector(contentPage.userSection).getStyleProperty('display'))
    .eql('inline-block');
});

test('Validate the page layout: "content" section visibility', async (t) => {
  const { contentPage } = t.ctx;
  await t
    .expect(Selector(contentPage.contentSection).getStyleProperty('display'))
    .eql('flex');
});

test('Validate the page content', async (t) => {
  const { contentPage } = t.ctx;
  const contentText = await getText(contentPage.contentSection);
  await t.expect(contentText).contains(contentPage.contentText);
});
