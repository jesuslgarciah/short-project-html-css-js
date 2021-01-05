import home from './template/home';
import about from './template/about';
import notfound from './template/notfound';

const PATHS = {
  home: {
      path: "/",
      template: home,
  },
  about: {
      path: "/about",
      template: about,
  },
  contact: {
      path: "/notfound",
      template: notfound,
  }
}

export default PATHS;