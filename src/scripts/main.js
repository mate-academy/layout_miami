'use strict';

const burgerMenuWrap = document.querySelector('.burger-menu-wrapper');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav__list');

burgerMenuWrap.onclick = function() {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuWrap.classList.toggle('burger-menu-wrapper--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  document.body.classList.toggle('body--disabled');
};

mobileNav.onclick = function() {
  burgerMenu.classList.remove('burger-menu--active');
  burgerMenuWrap.classList.remove('burger-menu-wrapper--active');
  document.body.classList.remove('body--disabled');
  mobileMenu.classList.remove('mobile-menu--active');
};
