'use strict';

const hamburger = document.querySelector('.header__hamburger');
// const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const closeNav = document.querySelector('.nav__icon-close');
const navLogo = document.querySelector('.nav__logo');
const navList = document.querySelector('.nav__list');
const navPhone = document.querySelector('.nav__phone-number');
const navCall = document.querySelector('.nav__call-order');

hamburger.addEventListener('click', function() {
  nav.style.display = 'block';
  closeNav.style.display = 'block';
  navLogo.style.display = 'block';
  navList.style.display = 'block';
  navLogo.style.display = 'block';
  navPhone.style.display = 'block';
  navCall.style.display = 'block';
});

closeNav.addEventListener('click', function() {
  nav.style.display = 'none';
  closeNav.style.display = 'none';
  navLogo.style.display = 'none';
  navList.style.display = 'none';
  navLogo.style.display = 'none';
  navPhone.style.display = 'none';
  navCall.style.display = 'none';
});
