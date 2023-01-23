'use strict';

const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--cross');
const menuLink = document.querySelectorAll('.menu__link');
const button = document.querySelector('.button');
const nameOfPerson = document.querySelectorAll('.form__input')[0];
const email = document.querySelectorAll('.form__input')[1];
const message = document.querySelector('.form__textarea');
const form = document.querySelector('.form');
const page = document.querySelector('.page');

button.addEventListener('click', (e) => {
  if (nameOfPerson.value.length !== 0
      && message.value.length !== 0
      && email.value.includes('@')) {
    form.reset();
    e.preventDefault();
  }
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
