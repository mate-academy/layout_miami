'use strict';

const menuBtn = document.querySelector('.icon--menu');
const menuClose = document.querySelector('.icon--close');

menuClose.addEventListener('click', () => {
  document.body.classList.remove('page__body--width-menu');
});

menuBtn.addEventListener('click', () => {
  document.body.classList.add('page__body--width-menu');
});
