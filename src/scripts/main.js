'use strict';

const burger = document.querySelector('.header-top__menu-burger');
const menu = document.querySelector('.header__menu--nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('header-top__menu-burger--active');
  menu.classList.toggle('nav--active');
});
