'use strict';

const page = document.querySelector('.page');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const openButton = document.querySelector('.header__toggler');
const closeButton = document.querySelector('.nav__toggler');
const form = document.querySelector('.contact__form');

openButton.addEventListener('click', () => {
  nav.classList.add('nav--active');
  page.style.overflowY = 'hidden';
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  page.style.overflowY = 'scroll';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    page.style.overflowY = 'scroll';
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
});
