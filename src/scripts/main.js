'use strict';

const body = document.querySelector('.page__body');
const menuOpen = document.querySelector('.header__menu-opener');
const menuClose = document.querySelector('.header__menu-closer');
const nav = document.querySelector('.header__nav');
const navLogo = document.querySelector('.header__logo');
const navList = document.querySelector('.header__nav-list');

menuOpen.addEventListener('click', () => {
  nav.style.left = '0';
  body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  nav.style.left = '';
  body.style.overflow = '';
});

navLogo.addEventListener('click', () => {
  nav.style.left = '';
  body.style.overflow = '';
});

navList.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.style.left = '';
    body.style.overflow = '';
  }
});
