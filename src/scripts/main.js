'use strict';

const burger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('#mobile-nav');
const firstScreen = document.querySelector('.page__first-screen');

burger.addEventListener('click', function() {
  mobileNav.classList.toggle('mobile-nav--active');
  burger.classList.toggle('header__burger--active');
  firstScreen.classList.toggle('page__first-screen--active');
});
