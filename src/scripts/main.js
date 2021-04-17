'use strict';

const header = document.querySelector('.header__container');
const title = document.querySelector('.header__title');
const phone = document.querySelector('.header__phone');
const toggler = document.querySelector('.header__toggler');
const nav = document.querySelector('.nav');

toggler.addEventListener('click', () => {
  header.classList.toggle('header__container--active');
  title.classList.toggle('header__title--active');
  phone.classList.toggle('header__phone--active');
  toggler.classList.toggle('header__toggler--active');
  nav.classList.toggle('nav--active');
});
