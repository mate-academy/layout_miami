'use strict';

const nav = document.querySelector('.nav');
const burger = document.querySelector('.head__burger');
const burgerLine = document.querySelector('.head__burger-line');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  burger.classList.toggle('head__burger--active');
  burgerLine.classList.toggle('head__burger-line--active');
});
