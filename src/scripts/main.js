'use strict';

const toggler = document.querySelector('.header__menu-openner');
const menu = document.querySelector('.nav');

toggler.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  toggler.classList.toggle('header__menu-close');
});

// toggler.addEventListener('click', function() {
//   menu.classList.toggle('nav-hidden');
// });
