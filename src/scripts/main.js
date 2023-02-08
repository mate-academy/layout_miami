'use strict';

const menuToggler = document.querySelector('.nav__link--burger-menu');
const menu = document.querySelector('.header__menu');

menuToggler.addEventListener('click', (event) => {
  menu.classList.toggle('is-active');
});
