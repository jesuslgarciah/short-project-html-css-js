import { router , reloadhome } from './router';

const search = document.getElementById("form-search");
search.addEventListener("submit", (e) => {
  e.preventDefault();
  const textBookSearch = document.getElementById("book-search").value;
  const bookSearch = textBookSearch.replace(' ', '+');
  reloadhome(bookSearch);
})

window.addEventListener('load', router);
window.addEventListener('hashchange', router);