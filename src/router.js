import gethash from './utils/gethash';
import home from './template/home';
import book from './template/book';
import about from './template/about';
import contact from './template/contact';
import notfound from './template/notfound';

async function router(search) {
  const routes = {
    home: home(search),
    book: book(),
    about: about(),
    contact: contact(),
    error: notfound(),
  }

  const hash = gethash();
  let page = hash ? hash : "home";
  const $CONTAINER = document.querySelector(".main");
  $CONTAINER.innerHTML = await routes[page] || routes.error;
}

export default router;