'use strict';

const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('#menu');
const menuClose = document.querySelector('#close');

const phone = document.querySelector('.icon--phone');
const tooltip = document.querySelector('#tooltip');

phone.addEventListener('mouseenter', () => {
  tooltip.classList.remove('display-none');

  setTimeout(() => {
    tooltip.classList.add('nav__tooltip--show');
  }, 100);
});

phone.addEventListener('mouseout', () => {
  setTimeout(() => {
    tooltip.classList.remove('nav__tooltip--show');
  }, 2000);
  tooltip.classList.add('display-none');
});

menuOpen.addEventListener('click', () => {
  menu.classList.add('toggle-menu');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('toggle-menu');
});
