import './style.css';
import { menu } from './menu.js';
import { contact } from './contact.js';
import { about } from './about.js';

const tabs = document.querySelectorAll('.navlink');
const content = document.querySelector('#content');
const logo = document.querySelector('#logo');

tabs.forEach((a) => {
  a.addEventListener('click', () => load(a.id));
});

logo.addEventListener('click', () => load('about'));

const load = (link) => {
  switch (link) {
    case 'about':
      while (content.childElementCount) content.lastChild.remove();
      about();
      break;
    case 'menu':
      while (content.childElementCount) content.lastChild.remove();
      menu();
      break;
    case 'contact':
      while (content.childElementCount) content.lastChild.remove();
      contact();
      break;
  }
}

about();
