import './modules/storage.js';
import './modules/pageLoad.js';
import './modules/formSubmit.js';
import './modules/menu.js';
import { DateTime } from './modules/luxon.js';
// import './index.css';

const p = document.querySelector('.real-date-time');
const footerYear = document.querySelector('.footer-year');
p.innerText = DateTime.now().toLocaleString(
  {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  },
);

footerYear.innerText = DateTime.now().toLocaleString(
  {
    year: 'numeric',
  },
);
