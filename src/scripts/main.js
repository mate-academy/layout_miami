'use strict';

const toggler = document.querySelector('.icon--menu');
const togglerCross = document.querySelector('.icon--cross');
const menu = document.querySelector('.page__menu');

toggler.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerCross.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});
