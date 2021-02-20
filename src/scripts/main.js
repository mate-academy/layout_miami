'use strict';

const mobileMenu = document.querySelector('.js-header__menu');
const menuToggler = document.querySelector('.js-menu-toggler');

menuToggler.addEventListener('click', function() {
  menuToggler.classList.toggle('menu-toggler--active');
  mobileMenu.classList.toggle('header__menu--active');
});
