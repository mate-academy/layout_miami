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
const menuHome = document.querySelector('#menuHome');
const menuAbout = document.querySelector('#menuAbout');
const menuCompare = document.querySelector('#menuCompare');
const menuDetails = document.querySelector('#menuDetails');
const menuContacts = document.querySelector('#menuContacts');

openMenu.addEventListener('click', () => {
  menu.classList.add('page__menu--active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});

menuHome.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});

menuAbout.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});

menuCompare.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});

menuDetails.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});

menuContacts.addEventListener('click', () => {
  menu.classList.remove('page__menu--active');
});
