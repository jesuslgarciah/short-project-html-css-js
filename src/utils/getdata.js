const API_KEY = "AIzaSyDlugRQle22azxHxGyAHhwRbtD1oIoFvlk";
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q=garcia+marquez&key=${API_KEY}`;

async function getdata(searchParam = "search-terms", bookId = ""){
  try {
    let API_URL = ""
    bookId ? API_URL = `https://www.googleapis.com/books/v1/volumes/${bookId}` : API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchParam}&key=${API_KEY}`;
    console.log(API_URL);
    const response = await fetch(API_URL);
    const data = await response.json();
    bookId = "";
    return data;
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

export default getdata;