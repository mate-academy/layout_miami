'use strict';

const burger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('#mobile-nav');

burger.addEventListener('click', function() {
  mobileNav.classList.toggle('mobile-nav--active');
  burger.classList.toggle('header__burger--active');
});
