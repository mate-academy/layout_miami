'use strict';

// disable scrolling when the menu is open

const burgerBtn = document.querySelector('#burger-menu');
const closeBtn = document.querySelector('#close-btn');
const menuArea = document.querySelectorAll('#menu > *');
const menu = document.querySelector('.page__menu');

burgerBtn.addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
  menu.classList.add('page__menu--open');
});

closeBtn.addEventListener('click', () => {
  document.body.classList.remove('page__body--with-menu');
  menu.classList.remove('page__menu--open');
});

menuArea.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.remove('page__body--with-menu');
    menu.classList.remove('page__menu--open');
  });
});

// preventDefault onSubmit

const form = document.querySelector('#form');
const formFields = document.querySelectorAll('.contact__field');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formFields.forEach(el => {
    el.value = '';
  });
});
