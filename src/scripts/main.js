'use strict';

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon--menu');
const iconClose = document.querySelector('.icon--close');

iconMenu.addEventListener('click', function() {
  menu.classList.add('menu--open');
});

iconClose.addEventListener('click', function() {
  menu.classList.remove('menu--open');
});
