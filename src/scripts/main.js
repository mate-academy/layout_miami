'use strict';

const nav = document.querySelector('.nav');
const openButton = document.querySelector('.header__toggler');
const closeButton = document.querySelector('.nav__toggler');
const form = document.querySelector('.contact__form');

openButton.addEventListener('click', () => {
  nav.classList.add('nav--active');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
});

form.addEventListener('submit', e => {
  e.preventDefault();
});
