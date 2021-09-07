'use strict';

const body = document.querySelector('.page-body');
const menuOpener = document.querySelector('.menu-toggler--opener');
const menu = document.querySelector('.menu');

menuOpener.addEventListener('click', function() {
  body.classList.add('page-body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page-body--with-menu');
});
