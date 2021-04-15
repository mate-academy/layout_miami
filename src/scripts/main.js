'use strict';

const page = document.querySelector('.page');
const toggler = document.querySelector('.header__nav-toggler');
const menu = document.querySelector('.nav');

const toggleMenu = () => {
  toggler.classList.toggle('header__nav-toggler--active');
  menu.classList.toggle('nav--active');
  page.classList.toggle('page--fixed');
};

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
