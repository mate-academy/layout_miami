'use strict';

const nav = document.querySelector('.nav');
const openButton = document.querySelector('.header__toggler');
const closeButton = document.querySelector('.nav__toggler');

openButton.addEventListener('click', () => {
  nav.classList.add('nav--active');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
});
