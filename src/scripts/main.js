'use strict';

const form = document.querySelector('.contacts-form');
const burger = document.querySelector('.header-content__checkbox');
const navList = document.querySelector('.nav__list');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

navList.addEventListener('click', event => {
  burger.checked = false;
});
