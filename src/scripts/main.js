'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const navItem = document.querySelectorAll('.nav__link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav__nav__hamburger_active');
    nav.classList.toggle('nav_active');
  });

  navItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('nav__nav__hamburger_active');
      nav.classList.toggle('nav_active');
    });
  });
});
