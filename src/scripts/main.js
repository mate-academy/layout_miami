'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.menu-toggler--opener');
const menu = document.querySelector('.menu');

// We disable page scroll when openning the menu
menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

// We enable page scrolling after closing the menu or pressing a nav link
menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});