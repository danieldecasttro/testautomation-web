import LoginPage from '../pages/LoginPage';
import ContentPage from '../pages/ContentPage';

const pageFactory = {
  login: LoginPage,
  content: ContentPage,
};

export default function getPage(pageName) {
  if (pageName in pageFactory) {
    return pageFactory[pageName];
  }
  throw new Error(`Page "${pageName}" does not exist in the page factory.`);
}
