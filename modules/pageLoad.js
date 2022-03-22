const listLink = document.querySelector('#lists');
const addLink = document.querySelector('#adds');
const contactLink = document.querySelector('#contacts');

const render = (hashKey) => {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => {
    page.style.display = 'none';
  });
  switch (hashKey) {
    case '':
      pages[0].style.display = 'block';
      contactLink.classList.remove('menu-link-color');
      listLink.classList.add('menu-link-color');
      addLink.classList.remove('menu-link-color');
      break;
    case '#home':
      pages[0].style.display = 'block';
      contactLink.classList.remove('menu-link-color');
      listLink.classList.add('menu-link-color');
      addLink.classList.remove('menu-link-color');
      break;
    case '#addBook':
      pages[1].style.display = 'block';
      contactLink.classList.remove('menu-link-color');
      listLink.classList.remove('menu-link-color');
      addLink.classList.add('menu-link-color');
      break;
    case '#contact':
      pages[2].style.display = 'block';
      contactLink.classList.add('menu-link-color');
      listLink.classList.remove('menu-link-color');
      addLink.classList.remove('menu-link-color');
      break;
    default:
      pages[0].style.display = 'block';
      contactLink.classList.remove('menu-link-color');
      listLink.classList.add('menu-link-color');
      addLink.classList.remove('menu-link-color');
  }
};

window.onhashchange = () => {
  render(window.location.hash);
};