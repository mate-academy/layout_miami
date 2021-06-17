'use strict';

const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.header__burger');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('header__burger--active');
  burger.classList.toggle('burger--active');
});
