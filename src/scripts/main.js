'use strict';

const burgerMenuButton = document.querySelector(
  '.navigation__item--burger-menu',
);
const burgerMenu = document.querySelector('.burger-menu');
const logo = document.querySelector('.navigation__logo');

burgerMenuButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuButton.classList.toggle('navigation__item--burger-menu--active');
  logo.classList.toggle('navigation__item--burger-menu--active');
});
