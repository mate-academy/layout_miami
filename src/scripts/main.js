'use strict';

const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--cross');
const menuLink = document.querySelectorAll('.menu__link');
const button = document.querySelector('.button');
const form = document.querySelector('.form');
const page = document.querySelector('.page');

button.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
});

menuOpener.addEventListener('click', () => {
  page.style.overflow = 'hidden';
});

menuCloser.addEventListener('click', () => {
  page.style.overflow = 'visible';
});

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    page.style.overflow = 'visible';
  });
});
