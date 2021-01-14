import gethash from './utils/gethash';
import home from './template/home';
import book from './template/book';
import about from './template/about';
import contact from './template/contact';
import notfound from './template/notfound';



async function router(search) {
  if (typeof search !== 'string') search = 'books'

  const routes = {
    home: home(search),
    book: book(),
    about: about(),
    contact: contact(),
    error: notfound(),
  }

  const hash = gethash();
  let page = hash ? hash : "home";
  console.log(page);
  const $CONTAINER = document.querySelector(".main");
  $CONTAINER.innerHTML = await routes[page] || await routes.error;
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
