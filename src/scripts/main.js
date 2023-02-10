'use strict';

const menuBtn = document.querySelector('.header__menu-button');

const menu = document.querySelector('.header__hidden-menu');

const menuLinks = document.querySelector('.menu__nav');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

menuLinks.addEventListener('click', function() {
  menuLinks.classList.toggle('active');
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});
