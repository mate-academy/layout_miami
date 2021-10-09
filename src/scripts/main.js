'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.menu');

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
