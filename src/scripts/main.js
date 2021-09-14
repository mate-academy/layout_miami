'use strict';

const opener = document.querySelector('.header__menu-opener');
const closer = document.querySelector('.icon--cross');
const body = document.querySelector('.page__body');

opener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

closer.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
