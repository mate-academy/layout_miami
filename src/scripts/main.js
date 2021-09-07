'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.top-menu__opener');
const menuCloser = document.querySelector('.menu-close');
const menu = document.querySelector('.menu__list');

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--menu-open');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page__body--menu-open');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--menu-open');
});
