'use strict';

const menuLink = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');

menuLink.addEventListener('click', () => {
  menuLink.classList.toggle('header__menu--open');
  menuLink.classList.toggle('header__menu--close');
  menu.classList.toggle('menu--open');
  document.body.classList.toggle('page--with-menu');
});

menu.addEventListener('focusout', () => {
  menuLink.classList.add('header__menu');
  menuLink.classList.remove('header__menu--close');
  menu.classList.remove('menu--open');
  document.body.classList.toggle('page--with-menu');
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
