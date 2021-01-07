import router from './router';
import home from './template/home';

const search = document.getElementById("form-search");
search.addEventListener("submit", () => {
  const textBookSearch = document.getElementById("book-search").value;
  const bookSearch = textBookSearch.trim().replace(' ', '+');
  router(bookSearch);
})

window.addEventListener('load', router);
window.addEventListener('hashchange', router);