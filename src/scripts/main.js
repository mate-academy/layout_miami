'use strict';

const menu = document.querySelector('.header__menu');
const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.value');

document.querySelector('.header__menu').onclick = function() {
  document.querySelector('.nav').classList.toggle('nav-hide');
  menu.classList.toggle('header__menu-close');
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
