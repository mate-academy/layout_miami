'use strict';

const body = document.querySelector('body');
const menu = document.querySelector('.header__nav_menu');
const menuOpen = document.querySelector('.header__nav_menu--open');
const menuClose = document.querySelector('.menu--close');
const returnButton = document.querySelector('.return_to_top--button');
const formSubmit = document.querySelector('.form--submit');

body.addEventListener('click', event => {
  switch (event.target) {
    case menu:
      body.style.overflowY = 'hidden';
      menuOpen.style.transform = 'translateY(0)';
      menuOpen.style.transition = 'transform 1s ease-in-out';
      break;

    case menuClose:
      menuOpen.style.transform = 'translateY(-100%)';
      menuOpen.style.transition = 'transform 1s ease-in-out';
      body.style.overflowY = 'visible';
      break;

    case returnButton:
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      break;

    case formSubmit:
      event.preventDefault();
      break;

    default:
      break;
  }
});
