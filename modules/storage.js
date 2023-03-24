const booksList = document.querySelector('.books-container');

export let booksArray = []; // eslint-disable-line

export const addBook = () => {
  const allBooks = booksArray.map((book, index) => (

    `<div class="book changeColor" id=${index}>
            <div class="sub-book">
              <p>"${book.title}" by</p>
              <p>${book.author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${book.title}", "${book.author}")'>Remove</button>
        </div>`

  )).join('');
  if (booksArray.length === 0) {
    booksList.innerHTML = '<h3 class="no-books-notification">Sorry there are no books available</h3>';
  } else {
    booksList.innerHTML = allBooks;
  }
  localStorage.setItem('booksData', JSON.stringify(booksArray));
};

window.removeBook = (title, author) => {
  booksArray = booksArray.filter((elem) => elem.title !== title || elem.author !== author);
  addBook();
};

window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('booksData'));
  if (!books) {
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
