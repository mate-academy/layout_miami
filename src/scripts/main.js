'use strict';

const btnNavEl = document.querySelector('.navigation__icons--burger');
const menuEl = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__navigation--close-button');

btnNavEl.addEventListener('click', function() {
  menuEl.classList.add('menu--active');
});

menuClose.addEventListener('click', function() {
  menuEl.classList.remove('menu--active');
});
