'use strict';

const menuOpen = document.querySelector('.burger__wrapper');
const menuClose = document.querySelector('.nav__close-icon');
const body = document.querySelector('body');
const menu = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__list .nav__link');

menuOpen.addEventListener('click', (e) => {
  menu.classList.add('active');
  body.style.overflowY = 'hidden';
});

menuClose.addEventListener('click', (e) => {
  menu.classList.remove('active');
  body.style.overflowY = 'visible';
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    menu.classList.remove('active');
    body.style.overflowY = 'visible';
  });
});
