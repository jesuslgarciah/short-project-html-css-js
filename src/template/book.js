import getdata from '../utils/getdata'

async function book() {
  try {
    const hash = location.hash.split("/");
    let id = hash[hash.length - 1];
    if (!id) id = "O8kOAQAAIAAJ";
    const bookInfo = await getdata("", id)
    const authors = bookInfo.volumeInfo.authors;
    return `
      <div>
        <div class="book-info">
          <h2>${bookInfo.volumeInfo.title}</h2>
          <div class="left-right">
            <img src="${bookInfo.volumeInfo.imageLinks?.thumbnail}"/>
            <div class="author">
              <h3>Authors: </h3>
              <p>
                ${authors && authors.map(author =>
                `${author}`
                ).join(', ')}
              </p>
            </div>
          </div>
          <br/>
          <br/>
          ${bookInfo.volumeInfo.description ? `
            <div>
              <h3>Description: </h3>
              <p>${bookInfo.volumeInfo.description}</p>
            </div>
          ` : ``
          }
        </div>

      </div>
    `
  } catch (error) {
    console.error(`Error at list book : ${error.message}`)
  }
}

export default book;