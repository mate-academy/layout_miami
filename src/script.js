'use strict';

const body = document.querySelector('.page__body');
const menu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const form = document.getElementById('form');
const menuList = document.querySelector('.menu__list');

menu.addEventListener('click', () => {
  body.classList.add('page__body--no-scroll');
});

closeMenu.addEventListener('click', () => {
  body.classList.remove('page__body--no-scroll');
});

menuList.addEventListener('click', (e) => {
  if (e.target.closest('.menu__link')) {
    body.classList.remove('page__body--no-scroll');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
