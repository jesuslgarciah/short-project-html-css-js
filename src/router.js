import gethash from './utils/gethash';

import home from './template/home';
import book from './template/book';
import about from './template/about';
import contact from './template/contact'
import notfound from './template/notfound';

async function router() {
  const routes = {
    home: home(),
    book: book(),
    about: about(),
    contact: contact(),
    error: notfound(),
  }

  const hash = gethash();
  console.log(hash);
  let page = hash ? hash : "home";
  const $CONTAINER = document.querySelector(".main");
  $CONTAINER.innerHTML = await routes[page] || routes.error;
  //window.history.pushState({}, "Genial", await path);
}

export default router;