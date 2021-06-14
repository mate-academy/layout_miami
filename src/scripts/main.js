'use strict';

const burger = document.querySelector('.header__burger');
const links = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  links.classList.toggle('header__nav--active');
  burger.classList.toggle('header__burger--active');
});
