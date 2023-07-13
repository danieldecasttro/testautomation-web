import { Selector, t, ClientFunction } from 'testcafe';
import { validCredentials } from './data/testUsers';
import { createPage } from './page-factory/factory';
import { getText } from './helpers/utils';

const getLocalStorageItem = ClientFunction((key) => {
  return localStorage.getItem(key);
});

fixture('Logout')
  .page('http://localhost:8080')
  .beforeEach(async (t) => {
    // Perform login
    t.ctx.loginPage = createPage('login');
    await t.ctx.loginPage.login(
      validCredentials[0].email,
      validCredentials[0].password,
    );
    t.ctx.contentPage = createPage('content');
  });

test('Successful logout', async (t) => {
  const { contentPage } = t.ctx;
  await contentPage.clickUser();
  await contentPage.logout();
  const { loginPage } = t.ctx;

  // Assert that the key "logged" was removed from local Storage
  const loggedInUser = await getLocalStorageItem('logged');
  await t.expect(loggedInUser).eql(null);

  // Assert that the navigation nav is NOT shown and the login section is shown
  await t
    .expect(Selector(contentPage.navigationNav).getStyleProperty('display'))
    .eql('none');
  await t
    .expect(Selector(loginPage.loginSection).getStyleProperty('display'))
    .eql('flex');
});
