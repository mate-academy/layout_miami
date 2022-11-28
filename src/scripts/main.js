'use strict';

const menuIcon
 = document.querySelector('.navigation__menu-wrapper__icon-wrapper');
const menuIconClose
 = document.querySelector('.sidebar__wrapper--close-image');
const menuNav = document.querySelector('.sidebar');
const body = document.body;

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('button-active');
  menuNav.classList.toggle('is-open');
  body.classList.toggle('noscroll');
});

menuIconClose.addEventListener('click', function() {
  menuNav.classList.remove('is-open');
  body.classList.toggle('noscroll');
});
