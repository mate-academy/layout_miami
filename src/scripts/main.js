'use strict';

const menu = document.getElementById('menu');
const openMenu = document.querySelector('.open-toggler');
const closeMenu = document.querySelector('.close-toggler');

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('show');
});

closeMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
});
