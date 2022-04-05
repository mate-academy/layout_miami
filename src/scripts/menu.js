'use strict';

const menu = document.querySelector('.header__menu');
const menuOpen = document.querySelector('.header__button-menu');
const menuClose = document.querySelector('.header__menu-button-close');

menuOpen.onclick = function() {
  menu.classList.toggle('header__menu--open');
};

menuClose.onclick = function() {
  menu.classList.toggle('header__menu--open');
};
