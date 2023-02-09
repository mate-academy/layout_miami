'use strict';

const menuToggler = document.querySelector('.nav__link--burger-menu');
const menuTogglerClose = document.querySelector('.nav__link--close-menu');

const menu = document.querySelector('.menu');

menuToggler.addEventListener('click', toggleMenu);
menuTogglerClose.addEventListener('click', toggleMenu);

function toggleMenu(event) {
  menu.classList.toggle('menu--hidden');
}
