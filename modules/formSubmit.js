import { booksArray, addBook } from './storage.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');

const formSubmit = document.querySelector('.book-form');

formSubmit.addEventListener('submit', (event) => {
  if (title.value === '' || author.value === '') {
    event.preventDefault();
  }
  event.preventDefault();
  const bookInput = {
    title: title.value,
    author: author.value,
  };
  booksArray.push(bookInput);
  addBook();
  title.value = '';
  author.value = '';
});