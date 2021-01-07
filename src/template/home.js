import getdata from '../utils/getdata';

async function home(search) {
  try {
    search = search ? search : "search"
    console.log(search);
    const data = await getdata(search);
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



export default home;