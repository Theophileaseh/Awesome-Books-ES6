const formSubmit = document.querySelector('.book-form');

import {booksArray} from './storage.js';
import {addBook} from './storage.js';

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