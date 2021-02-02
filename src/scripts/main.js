'use strict';

// eslint-disable-next-line no-unused-vars
const burger = document.querySelector('.burger__menu');

// eslint-disable-next-line no-unused-vars
const header = document.querySelector('.header');

// eslint-disable-next-line camelcase
const header__menu = document.querySelector('.nav__list');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('is-active');
  this.classList.toggle('background');
});

burger.addEventListener('click', function(e) {
  e.preventDefault();
  header.classList.toggle('background');
  header__menu.classList.toggle('active');
});
