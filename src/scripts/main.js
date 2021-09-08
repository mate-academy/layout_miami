'use strict';

const body = document.querySelector('.page__body')
const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--cross');
const menu = document.querySelector('.menu');


menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});

