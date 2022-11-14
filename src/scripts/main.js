'use strict';

const pageNav = document.querySelector('.page__nav');
const navIconOpen = document.querySelector('.icon--nav-burger');
const navIconClose = document.querySelector('.icon--nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const navTestRide = document.querySelector('.nav__test-ride');

[navIconOpen, navIconClose, navTestRide].forEach(element => {
  element.addEventListener('click', () => {
    pageNav.classList.toggle('page__nav--opened');
  });
});

navLinks.forEach(element => {
  element.addEventListener('click', () => {
    pageNav.classList.remove('page__nav--opened');
  });
});
