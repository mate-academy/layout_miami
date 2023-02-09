'use strict';

const menuBtn = document.querySelector('.header__menu-button');

const menu = document.querySelector('.header__hidden-menu');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
