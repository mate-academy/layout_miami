'use strict';

// menu options
const toggler = document.querySelector('.header__menu-openner');
const menu = document.querySelector('.nav');

toggler.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  toggler.classList.toggle('header__menu-close');
});

// menu 'home' button options
const navClose = document.querySelector('.nav__link-close');

navClose.addEventListener('click', function() {
  menu.classList.add('nav-hidden');
});

// menu logo options
const logo = document.querySelector('.nav__logo-close');

logo.addEventListener('click', function() {
  menu.classList.add('nav-hidden');
});

// submit button
const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});
