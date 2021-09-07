'use strict';

const body = document.querySelector('.page-body');
const menuOpener = document.querySelector('.menu-toggler--opener');
const menuCloser = document.querySelector('.menu-toggler--closer');

menuOpener.addEventListener('click', function() {
  body.classList.add('page-body--with-menu');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page-body--with-menu');
});
