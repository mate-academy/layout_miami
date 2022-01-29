'use strict';

const body = document.querySelector('body');
const menu = document.querySelector('.header__nav_menu');
const menuOpen = document.querySelector('.main_menu');
const menuClose = document.querySelector('.menu--close');
const returnButton = document.querySelector('.return_to_top--button');
const link = document.querySelectorAll('.menu_item--link');
const form = document.querySelector('form');

link.forEach(element => {
  element.addEventListener('click', event => {
    body.style.overflowY = 'overlay';
    menuOpen.style.top = '-100vh';
  });
});

body.addEventListener('click', event => {
  switch (event.target) {
    case menu:
      body.style.overflowY = 'hidden';
      menuOpen.style.top = '0';
      menuOpen.style.transition = 'top 1s ease-in-out';
      break;

    case menuClose:
      body.style.overflowY = 'overlay';
      menuOpen.style.top = '-100vh';
      menuOpen.style.transition = 'top 1s ease-in-out';
      break;

    case returnButton:
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      break;

    default:
      break;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
});
