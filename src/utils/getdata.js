async function getdata(searchParam, bookId){
  try {
    if(searchParam || bookId){
      let API_URL = ""
      bookId ? API_URL = `https://www.googleapis.com/books/v1/volumes/${bookId}` : API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchParam}`;
      console.log(API_URL);
      const response = await fetch(API_URL);
      const data = await response.json();
      bookId = "";
      return data;
    }

    return {};
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

export default getdata;