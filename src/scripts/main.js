'use strict';

const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.header__hamburger');
const closeNav = document.querySelector('.nav__icon-close');

hamburger.addEventListener('click', function() {
  nav.classList.add('nav_displayed');
});

closeNav.addEventListener('click', function() {
  nav.classList.remove('nav_displayed');
});
