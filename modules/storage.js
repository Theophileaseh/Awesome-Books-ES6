const booksList = document.querySelector('.books-container');

export let booksArray = [];

export const addBook = () => {
  let booksCode = '';
  booksArray.forEach((element, index) => {
    const { title, author } = element;
    if (index % 2 === 0) {
      booksCode += `
        <div class="book changeColor">
            <div class="sub-book">
              <p>"${title}" by</p>
              <p>${author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
        </div>
            `;
    } else {
      booksCode += `
        <div class="book">
          <div class="sub-book">
            <p>"${title}" by</p>
            <p>${author}</p>
          </div>
          <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
        </div>
            `;
    }
  });
  booksList.innerHTML = booksCode;
  localStorage.setItem('booksData', JSON.stringify(booksArray));
};

window.removeBook = (title) => {
  booksArray = booksArray.filter((elem) => elem.title !== title);
  addBook();
};

window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('booksData'));
  if (books === null) {
    booksArray = [
      {
        title: 'The Goods',
        author: 'Theophile A.',
      },
      {
        title: 'Funny Bone',
        author: 'NTA',
      },
    ];
  } else {
    booksArray = books;
  }
  addBook();
});