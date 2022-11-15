'use strict';

const pageBody = document.querySelector('.page__body');
const pageNav = document.querySelector('.page__nav');
const navIconOpen = document.querySelector('.icon--nav-burger');
const navIconClose = document.querySelector('.icon--nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const navTestRide = document.querySelector('.nav__test-ride');
const goToTop = document.querySelector('.go-to-top');

[navIconOpen, navIconClose, navTestRide, ...navLinks].forEach(element => {
  element.addEventListener('click', () => {
    pageBody.classList.toggle('page__body--menu-opened');
    pageNav.classList.toggle('page__nav--opened');
  });
});

window.addEventListener('scroll', () => {
  if (pageBody.getBoundingClientRect().top < -150) {
    goToTop.classList.add('go-to-top--show');
  } else {
    goToTop.classList.remove('go-to-top--show');
  }
});
