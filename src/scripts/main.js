'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const toggler = document.querySelector('.burger__line');

burger.addEventListener('click', () => {
  menu.classList.toggle('nav--desktop');
  menu.classList.toggle('nav--mobile');
  toggler.classList.toggle('burger__line--open');
});
