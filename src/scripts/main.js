'use strict';

const menuOpen = document.querySelector('.header-menu');
const nav = document.querySelector('.page__nav');
const menuClose = document.querySelector('.nav__close-btn');
const navLink = document.querySelector('.nav__list');

menuOpen.addEventListener('click', () => {
  nav.classList.add('page__nav-is-active');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('page__nav-is-active');
});

navLink.addEventListener('click', () => {
  nav.classList.remove('page__nav-is-active');
});
