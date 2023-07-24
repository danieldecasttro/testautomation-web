import LoginPage from '../pages/LoginPage';
import ContentPage from '../pages/ContentPage';

/**
 * Page Factory mapping page names to corresponding page classes.
 * @type {Object.<string, any>} - An object mapping page names to page classes.
 */

const pageFactory = {
  login: LoginPage,
  content: ContentPage,
};

/**
 * Get the page class for the given page name.
 *
 * @param {string} pageName - The name of the page.
 * @returns {Object} - The page class corresponding to the given page name.
 * @throws {Error} - If the page name is not found in the pageFactory.
 */

export default function getPage(pageName) {
  if (pageName in pageFactory) {
    return pageFactory[pageName];
  }
  throw new Error(`Page "${pageName}" does not exist in the page factory.`);
}
