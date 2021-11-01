'use strict';

const toggler = document.querySelector('.header__toggler');
const nav = document.querySelector('.header__nav');
const pageContent = document.querySelector('.page__content');
const navList = document.querySelector('.nav__list');
const button = document.querySelector('.contacts__button');
const inputs = document.querySelectorAll('.contacts__input');

toggler.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
  toggler.classList.toggle('header__toggler--active');
  pageContent.classList.toggle('page__content--hidden');
});

navList.addEventListener('click', () => {
  nav.classList.remove('header__nav--active');
  pageContent.classList.remove('page__content--hidden');
  toggler.classList.toggle('header__toggler--active');
});

button.addEventListener('click', () => {
  inputs.forEach((input) => {
    input.value = '';
  });
});
