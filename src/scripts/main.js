'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const menuBtn = document.querySelector('.icon--menu');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});
