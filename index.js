import * as storage from "./modules/storage.js";
import * as pageLoad from "./modules/pageLoad.js";
import * as formSubmit from "./modules/formSubmit.js";
//import * as luxon from "./modules/luxon.js";
import * as menu from "./modules/menu.js";
import { DateTime } from "../node_modules/luxon/src/luxon.js";


const p = document.querySelector('.real-date-time');
p.innerText = DateTime.now().toLocaleString(
  {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }

)