const booksList = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formSubmit = document.querySelector('.book-form');

export let booksArray = [];

export const addBook = () => {
  let booksCode = '';
  booksArray.forEach((element, index) => {
    const { title, author } = element;
    if (index % 2 === 0) {
      booksCode += `
        <div class="book changeColor">
            <div class="sub-book">
              <p>${title}</p>
              <p>${author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
        </div>
            `;
    } else {
      booksCode += `
        <div class="book">
          <div class="sub-book">
            <p>${title}</p>
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
        title: 'Book one',
        author: 'Kait',
      },
      {
        title: 'Book two',
        author: 'Cham',
      },
    ];
  } else {
    booksArray = books;
  }
  addBook();
});

