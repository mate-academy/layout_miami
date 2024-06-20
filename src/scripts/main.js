'use strict';

const burgerMenuButton = document.querySelector(
  '.navigation__item--burger-menu',
);
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuButton.classList.toggle('navigation__item--burger-menu--active');
  if (burgerMenu.classList.contains('burger-menu--active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
