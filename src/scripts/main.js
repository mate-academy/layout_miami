'use strict';

const form = document.querySelector('.contuct-us__form');

form.addEventListener('submit', event => {
  document.location.reload();

  event.preventDefault();
});

const manu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon--menu');

iconMenu.addEventListener('click', () => {
  manu.classList.toggle('menu--active');
  iconMenu.classList.toggle('icon--menu-cross');
});

window.addEventListener('scroll', () => {
  manu.classList.remove('menu--active');
  iconMenu.classList.remove('icon--menu-cross');
});
