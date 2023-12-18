'use strict';

const openButton = document.querySelector('.header__menu-opener');
const closeButton = document.querySelector('.icon--cross');
const nav = document.querySelector('#menu');
const navList = document.querySelector('.menu__list');
const body = document.querySelector('body');

const openNavClass = 'page__menu--open';
const turnOffScrollClass = 'body--scroll-off';

function openMenu() {
  nav.classList.add(openNavClass);
  body.classList.add(turnOffScrollClass);
}

function closeMenu() {
  nav.classList.remove(openNavClass);
  body.classList.remove(turnOffScrollClass);
}

openButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

navList.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    closeMenu();
  }
});

const form = document.querySelector('.action');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
