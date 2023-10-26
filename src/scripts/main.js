'use strict';

const menu = document.querySelector('.navigation__item--hamburger');
const links = document.querySelector('.naviagtion__icon');
const logo = document.querySelector('.navigation__item--logo');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  logo.classList.toggle('active');
});

// clean the form
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
  // event.target.querySelectorAll('.form-item__label + *')
  //   .forEach(input => input.value = '');
});
