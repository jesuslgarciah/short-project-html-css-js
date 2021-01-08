import gethash from './utils/gethash';
import { home } from './template/home';
import book from './template/book';
import about from './template/about';
import contact from './template/contact';
import notfound from './template/notfound';

async function router(test) {
  const routes = {
    home: home(test),
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

async function reloadhome(search){
  try {
    await router(search);
  } catch (error) {
    console.error("Reload error " + error.message);
  }
}

export {
  router,
  reloadhome
}
