import getPage from './index';

export function createPage(pageName) {
  const Page = getPage(pageName);
  return new Page();
}
