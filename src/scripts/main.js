'use strict';

const phoneBtn = document.querySelector('.phone__btn');
const phoneList = document.querySelector('.phone__list');
const menuButton = document.querySelectorAll('.nav__btn');
const menuLinks = document.querySelectorAll('.nav__link');
const menuNavigation = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form');
const formInputName = document.querySelector('#name');
const formInputEmail = document.querySelector('#email');
const formInputMessage = document.querySelector('#message');
const formInputNameError = document.querySelector('.form__error--name');
const formInputEmailError = document.querySelector('.form__error--email');
const formInputMessageError = document.querySelector('.form__error--message');
const regexEmail = /^[-\w.]+@([-\w]+\.)+[a-z]+$/i;

const removeClasses = () => {
  menuNavigation.classList.remove('nav--is-open');
  phoneList.classList.remove('phone__list--is-open');
  overlay.classList.remove('overlay--is-open');
};

const checkData = (e) => {
  e.preventDefault();

  const name = formInputName.value;
  const email = formInputEmail.value;
  const message = formInputMessage.value;

  if (name.trim() === '') {
    formInputName.classList.add('form__input--error');
    formInputNameError.classList.add('form__error--show');
  } else {
    formInputName.classList.remove('form__input--error');
    formInputNameError.classList.remove('form__error--show');
  }

  if (!regexEmail.test(email.trim())) {
    formInputEmail.classList.add('form__input--error');
    formInputEmailError.classList.add('form__error--show');
  } else {
    formInputEmail.classList.remove('form__input--error');
    formInputEmailError.classList.remove('form__error--show');
  }

  if (message.trim() === '') {
    formInputMessage.classList.add('form__textarea--error');
    formInputMessageError.classList.add('form__error--show');
  } else {
    formInputMessage.classList.remove('form__textarea--error');
    formInputMessageError.classList.remove('form__error--show');
  }

  if (
    name.trim() !== ''
    && regexEmail.test(email.trim())
    && message.trim() !== ''
  ) {
    formInputName.value = '';
    formInputEmail.value = '';
    formInputMessage.value = '';
  }
};

menuButton.forEach(btn => {
  btn.addEventListener('click', () => {
    menuNavigation.classList.toggle('nav--is-open');
    overlay.classList.toggle('overlay--is-open');
  });
});

phoneBtn.addEventListener('click', () => {
  phoneList.classList.toggle('phone__list--is-open');
  overlay.classList.toggle('overlay--is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', removeClasses);
});

overlay.addEventListener('click', removeClasses);
form.addEventListener('submit', checkData);
