'use strict';

const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--cross');
const slideMenu = document.querySelector('.page__menu');
const listItems = document.querySelector('.menu__list');
const submitButton = document.querySelector('.button--submit');
const popupMessage = document.querySelector('.sended-form');
const bookTestRide = document.querySelector('.menu__call--action');

menuOpener.addEventListener('click', () => {
  slideMenu.classList.add('page__menu--open');
});

menuCloser.addEventListener('click', () => {
  slideMenu.classList.remove('page__menu--open');
});

listItems.addEventListener('click', () => {
  slideMenu.classList.remove('page__menu--open');
});

bookTestRide.addEventListener('click', () => {
  slideMenu.classList.remove('page__menu--open');
});

submitButton.addEventListener('click', e => {
  e.preventDefault();

  const emailForm = document.querySelector('.input__field--email').value;
  const nameForm = document.querySelector('.input__field--name').value;

  if (emailForm === '' || nameForm === '') {
    return;
  }

  document.querySelector('.contact-us__user-input').reset();

  popupMessage.hidden = false;

  setTimeout(function() {
    popupMessage.hidden = true;
  }, 1000);
});
