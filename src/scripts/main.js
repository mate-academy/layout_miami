'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu__list');

const closeMenuButton = document.getElementById('close-menu-button');

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});

closeMenuButton.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
