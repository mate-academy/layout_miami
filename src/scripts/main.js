'use strict';

const buttons = document.querySelectorAll('.nav__button--menu');
const menu = document.querySelector('.menu');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
  });
});
