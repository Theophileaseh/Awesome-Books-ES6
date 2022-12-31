import { booksArray, addBook } from './storage.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formSubmit = document.querySelector('.book-form');
const messageContainer = document.querySelector('.message-notification');

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  if (title.value === '' || author.value === '') {
    event.preventDefault();
  }

  event.preventDefault();
  const bookInput = {
    title: title.value,
    author: author.value,
  };

  const result = booksArray.filter((elem) => (elem.title === bookInput.title
    && elem.author === bookInput.author));

  if (result.length !== 0) {
    messageContainer.innerHTML = 'Sorry Book already exists';
  } else {
    booksArray.push(bookInput);
    addBook();
    title.value = '';
    author.value = '';

    messageContainer.innerHTML = 'Congratulations. Book added!';
  }
});
