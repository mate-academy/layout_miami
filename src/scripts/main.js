'use strict';

const menu = document.querySelector('.header__menu');

document.querySelector('.header__menu').onclick = function() {
  document.querySelector('.nav').classList.toggle('nav-hide');
  menu.classList.toggle('header__menu-close');
};
