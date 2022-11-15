'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const sendButton = document.querySelector('.button--send');

sendButton.addEventListener('click', formSubmit, false);

function formSubmit(event) {
  event.preventDefault();
}

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', () => {
  menu.classList.add('page__menu--active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});
