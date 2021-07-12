'use strict';

const hamburger = document.querySelector('.header__menu');
const menu = document.querySelector('.header__nav-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('header__menu--active');
  hamburger.classList.toggle('header__menu--passive');
  menu.classList.toggle('header__nav-container--active');
});
