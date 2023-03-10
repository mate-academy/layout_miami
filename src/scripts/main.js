'use strict';

const navBtn = document.querySelector('#nav-menu-trigger');
const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.banner__logo');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--show');
  navBtn.classList.toggle('banner__menu-btn--close');
  navLogo.classList.toggle('banner__logo--black');
});
