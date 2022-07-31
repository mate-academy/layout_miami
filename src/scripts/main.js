'use strict';

const bar = document.querySelector('.nav__icon--bar');
const barX = document.querySelector('.menu__x-wrapper');
const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});

barX.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});

// disable page scrolling under the menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
