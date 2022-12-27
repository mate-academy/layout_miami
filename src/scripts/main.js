'use strict';

const buttonOpen = document.querySelector('.icon--menu-opener');
const buttonClose = document.querySelector('.icon--cross');
const modal = document.querySelector('.nav');
const menuItem = document.querySelectorAll('.nav__link');
const form = document.querySelector('form');

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

menuItem.forEach(function(item) {
  item.addEventListener('click', closeMenu);
});

function openMenu() {
  modal.classList.remove('nav--hidden');
}

function closeMenu() {
  modal.classList.add('nav--hidden');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
