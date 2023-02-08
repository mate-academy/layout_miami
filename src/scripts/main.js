'use strict';

const menu = document.querySelector('.nav');

const openbutton = document.querySelector('.header__toggle');

openbutton.addEventListener('click', function() {
  menu.classList.remove('nav--closed');
  menu.classList.add('nav--open');
});

const closebutton = document.querySelector('.nav__button-close');

closebutton.addEventListener('click', function() {
  menu.classList.remove('nav--open');
  menu.classList.add('nav--closed');
});
