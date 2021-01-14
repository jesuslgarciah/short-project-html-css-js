import getdata from '../utils/getdata';

async function home(search) {
  try {
    const data = await getdata(search);
    const books = await data.items;
    return `
      <div class="container">
        ${books.map(book => `
          <div class="card">
            <a href="#/book/${book.id}">
              <img src="${book.volumeInfo.imageLinks.smallThumbnail}"/>
              <h5>${book.volumeInfo.title}</h5>
            </a>
          </div>
        `).join('')}
      </div>
    `
  } catch (error) {
    console.error(`Home error: ${error}`)
  }
}



export default home;