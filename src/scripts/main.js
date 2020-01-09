'use strict';

const humburger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile-nav');
const cross = document.querySelector('.mobile-nav__cross');

humburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__mobile-nav--active');
});

cross.addEventListener('click', () => {
  mobileMenu.classList.remove('header__mobile-nav--active');
});
