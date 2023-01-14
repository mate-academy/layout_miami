'use strict';

const menuOpen = document.querySelector('.burger__wrapper');
const menuClose = document.querySelector('.nav__close-icon');
const body = document.querySelector('body');
const menu = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__list .nav__link');
const form = document.querySelector('.contact-us__form');

const nameInput = form.querySelector('.form__name');
const emailInput = form.querySelector('.form__email');
const commentInput = form.querySelector('.form__comment');

menuOpen.addEventListener('click', (e) => {
  menu.classList.add('active');
  body.style.overflowY = 'hidden';
  document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
});

menuClose.addEventListener('click', (e) => {
  menu.classList.remove('active');
  body.style.overflowY = 'visible';
  document.getElementsByTagName('html')[0].style.overflowY = 'visible';
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    menu.classList.remove('active');
    body.style.overflowY = 'visible';
    document.getElementsByTagName('html')[0].style.overflowY = 'visible';
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nameInput.value = '';
  emailInput.value = '';
  commentInput.value = '';
});
