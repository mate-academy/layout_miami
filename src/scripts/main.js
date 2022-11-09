'use strict';

const navIconOpen = document.querySelector('.icon--nav-burger');
const navIconClose = document.querySelector('.icon--nav-close');
const pageNav = document.querySelector('.page__nav');

[navIconOpen, navIconClose].forEach(element => {
  element.addEventListener('click', () => {
    pageNav.classList.toggle('page__nav--opened');
  });
});
