'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--menu-open');
const menu = document.querySelector('.menu');

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
