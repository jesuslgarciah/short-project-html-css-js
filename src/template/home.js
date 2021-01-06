import getdata from '../utils/getdata';

async function home() {
  try {
    const data = await getdata();
    const books = await data.items;
    return `
      <form id="form-search">
        <label for="search"></label>
        <input type="text" id="search" class="search" placeholder="Search Your Book">
        <input type="submit" value="¡Search now!">
      </form>
      <div class="container">
        <div class="card">
          ${books.map(book => `
            <a href="#/book/${book.id}">
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