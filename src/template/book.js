import getdata from '../utils/getdata'

async function book() {
  try {
    const hash = location.hash.split("/");
    let id = hash[hash.length - 1];
    if (!id) id = "O8kOAQAAIAAJ";
    const bookInfo = await getdata("", id)
    return `
      <div>
        <h2>${bookInfo.volumeInfo.title}</h2>
      </div>
    `
  } catch (error) {
    console.error(`Error at list book: ${error.message}`)
  }
}

export default book;