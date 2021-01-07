async function getdata(searchParam, bookId = ""){
  try {
    let API_URL = ""
    bookId ? API_URL = `https://www.googleapis.com/books/v1/volumes/${bookId}` : API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchParam}`;
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