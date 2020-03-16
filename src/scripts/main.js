'use strict';

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const header = document.querySelector('.header');
const form = document.querySelector('.consultation__form');
const inputName = document.querySelector('.input__name');
const inputPhone = document.querySelector('.input__phone');
const inputEmail = document.querySelector('.input__email');

const onToggleEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeMenu();
  }
};

const openMenu = function() {
  navMain.classList.remove('nav--closed');
  navMain.classList.add('nav--opened');
  header.classList.add('header--hidden');
  document.addEventListener('keydown', onToggleEscPress);
};

const closeMenu = function() {
  navMain.classList.add('nav--closed');
  navMain.classList.remove('nav--opened');
  header.classList.remove('header--hidden');
  document.removeEventListener('keydown', onToggleEscPress);
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

navToggle.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE
    && navMain.classList.contains('nav--closed')) {
    closeMenu();
  } else {
    openMenu();
  }
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  inputName.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
});
