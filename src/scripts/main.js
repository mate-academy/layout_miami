'use strict';

const body = document.querySelector('.page');
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuItems = document.querySelectorAll('.nav__item');
const closeItem = document.querySelector('.nav__close-burger');

burgerItem.addEventListener('click', () => {
  menu.classList.add('header__nav--active');
  body.style.overflow = 'hidden';
});

closeItem.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
  body.style.overflow = 'scroll';
});

for (const menuItem of menuItems) {
  menuItem.addEventListener('click', () => {
    menu.classList.remove('header__nav--active');
    body.style.overflow = 'scroll';
  });
}
