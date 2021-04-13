'use strict';

const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', function() {
  nav.classList.toggle('nav_displayed');
  hamburger.classList.toggle('header__hamburger_close');
});
