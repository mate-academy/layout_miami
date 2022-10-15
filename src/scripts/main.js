'use strict';

const toggler = document.querySelector('.icon--menu');
const togglerCross = document.querySelector('.icon--cross');
const togglerHome = document.querySelector('.menu__item--home');
const togglerAboutUs = document.querySelector('.menu__item--about-us');
const togglerCompare = document.querySelector('.menu__item--compare');
const togglerDetails = document.querySelector('.menu__item--details');
const togglerContacts = document.querySelector('.menu__item--contacts');
const menu = document.querySelector('.page__menu');

toggler.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerCross.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerHome.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerAboutUs.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerCompare.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerDetails.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});

togglerContacts.addEventListener('click', function() {
  menu.classList.toggle('page__menu--open');
});
