import getdata from '../utils/getdata';
import router from '../router';



async function home(search) {
  try {
    let paramSearch = search ? search : "search"
    const data = await getdata(paramSearch);
    const books = await data.items;
    return `
      <div class="container">
        <div class="card">
          ${books.map(book => `
            <a href="#/book/${book.id}">
              <p>${book.volumeInfo.title}</p>
              <img src="${book.volumeInfo.imageLinks.smallThumbnail}"/>
            </a>
          `)}
        </div>
      </div>
    `
  } catch (error) {
    console.error(`Home error: ${error}`)
  }
}



export {
  home
};