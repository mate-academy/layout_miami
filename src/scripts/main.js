'use strict';

const openMenuButton = document.querySelector(
  '.top-controls__button--menu-open'
);
const closeMenuButton = document.querySelector(
  '.top-controls__button--menu-close'
);
const menuLinks = document.querySelectorAll('.menu__nav-list-link');
const menu = document.querySelector('.menu');

[openMenuButton, closeMenuButton, ...menuLinks].forEach((button) => {
  button.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
  });
});
