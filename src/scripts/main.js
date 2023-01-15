'use strict';

const menu = document.querySelector('.menu');
const body = document.querySelector('.page__body');
const iconMenu = document.querySelector('.icon--menu');
const iconClose = document.querySelector('.icon--close');
const menuItems = document.querySelectorAll('.menu__item');

iconMenu.addEventListener('click', function() {
  body.classList.add('page__body--hidden');
  menu.classList.add('menu--open');
});

iconClose.addEventListener('click', function() {
  body.classList.remove('page__body--hidden');
  menu.classList.remove('menu--open');
});

for (const item of menuItems) {
  item.addEventListener('click', () => {
    body.classList.remove('page__body--hidden');
    menu.classList.remove('menu--open');
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});
