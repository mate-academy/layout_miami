'use strict';

const nav = document.querySelector('.nav');
const title = document.querySelector('.header__title');
const toggler = document.querySelector('#nav-toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  toggler.classList.toggle('toggler--active');
  title.classList.toggle('title--active');
});
