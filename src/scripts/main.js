'use strict';

const form = document.querySelector('.register__form');
const inputs = document.querySelectorAll('.register__input');
const textarea = document.querySelector('.register__textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });

  textarea.value = '';
});

const clicked = document.querySelector('.header__nav-toggler');
const nav = document.querySelectorAll('.nav__item');

nav.forEach((element) => {
  element.addEventListener('click', () => {
    clicked.checked = false;
  });
});
