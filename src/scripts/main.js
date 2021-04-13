'use strict';

const header = document.querySelector('.header');

const menu = document.querySelector('.header__menu');
const navigation = document.querySelector('.nav');

const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  header.classList.toggle('header--active');
});

toggler.addEventListener('click', () => {
  menu.classList.toggle('header__menu--active');
});

toggler.addEventListener('click', () => {
  navigation.classList.toggle('header__nav--active');
});
