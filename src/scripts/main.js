'use strict';

const openMenuButton = document.querySelector(
  '.top-controls__button--menu-open'
);
const closeMenuButton = document.querySelector(
  '.top-controls__button--menu-close'
);
const body = document.querySelector('.body');
const menuLinks = document.querySelectorAll('.menu__nav-list-link');
const menu = document.querySelector('.menu');
const form = document.querySelector('.contact-us__form');

[openMenuButton, closeMenuButton, ...menuLinks].forEach((button) => {
  button.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
    body.classList.toggle('body--menu-open');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.contact-us__input');

  inputs.forEach((input) => {
    input.value = '';
  });

  window.scrollTo(0, 0);
});
