import { router , reloadhome } from './router';
//import { reloadhome } from './template/home';

const search = document.getElementById("form-search");
search.addEventListener("submit", (e) => {
  e.preventDefault();
  const textBookSearch = document.getElementById("book-search").value;
  const bookSearch = textBookSearch.trim().replace(' ', '+');
  reloadhome(bookSearch);
})

window.addEventListener('load', router);
window.addEventListener('hashchange', router);