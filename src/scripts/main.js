'use strict';

const burgerMenuWrap = document.querySelector('.burger-menu-wrapper');
const burgerMenu = document.querySelector('.burger-menu');
const headerLogo = document.querySelector('.header__logo');

burgerMenuWrap.onclick = function() {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuWrap.classList.toggle('burger-menu-wrapper--active');
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav--active');
  headerLogo.classList.toggle('header__logo--active');
  document.body.classList.toggle('body--disabled');
  document.querySelector('.nav').classList.toggle('nav--active');
};

const nav = document.querySelector('.nav__list');

nav.onclick = function() {
  burgerMenu.classList.remove('burger-menu--active');
  burgerMenuWrap.classList.remove('burger-menu-wrapper--active');
  headerLogo.classList.remove('header__logo--active');
  document.body.classList.remove('body--disabled');
  document.querySelector('.nav').classList.remove('nav--active');
  document.querySelector('.mobile-nav').classList.remove('mobile-nav--active');
};
