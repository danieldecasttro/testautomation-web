import getPage from './index';

/**
 * @param {string} pageName - The name of the page for which the page object is created.
 * @returns {PageObject} - The page object corresponding to the specified page name.
 */

export function createPage(pageName) {
  const Page = getPage(pageName);
  return new Page();
}
