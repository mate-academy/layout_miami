'use strict';

const menu = document.querySelector('.nav__menu-full');
const toggler = document.querySelector('#nav-toggler');

toggler.addEventListener('click', () => {
  menu.classList.toggle('nav__menu-full--active');
});
