'use strict';

// eslint-disable-next-line no-unused-vars
const burger = document.querySelector('.burger__menu');

// eslint-disable-next-line no-unused-vars
const header = document.querySelector('.header');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('is-active');
  this.classList.toggle('background');
});

burger.addEventListener('click', function(e) {
  e.preventDefault();
  header.classList.toggle('background');
});
