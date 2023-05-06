'use strict';

const openButton = document.querySelector('#navOpenButton');
const closeButton = document.querySelector('#navCloseButton');
const menu = document.querySelector('#menu');
const navList = document.querySelector('#navList');
const page = document.querySelector('body');
const form = document.querySelector('form');

const openMenuClass = 'page__menu--open';
const turnOffScrollClass = 'page--scroll-off';

function openMenu() {
  menu.classList.add(openMenuClass);
  page.classList.add(turnOffScrollClass);
}

function closeMenu() {
  menu.classList.remove(openMenuClass);
  page.classList.remove(turnOffScrollClass);
}

openButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
