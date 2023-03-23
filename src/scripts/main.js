'use strict';

const menuButton = document.querySelectorAll('.nav__btn');
const sideNavigation = document.querySelector('.nav');

menuButton.forEach(btn => {
  btn.addEventListener('click', () => {
    sideNavigation.classList.toggle('nav__is-open');
  });
});
