'use strict';

// menu options
const toggler = document.querySelector('.header__menu-openner');
const menu = document.querySelector('.nav');
const body = document.querySelector('.page__body');

toggler.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  toggler.classList.toggle('header__menu-close');
  body.classList.toggle('page__body--with-menu');
});

// menu 'home' button options
const navClose = document.querySelector('.nav__link-close');

navClose.addEventListener('click', function() {
  menu.classList.remove('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});

// menu logo options
const logo = document.querySelector('.nav__logo-close');

logo.addEventListener('click', function() {
  menu.classList.remove('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});

// submit button
const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

const closemenu = document.querySelector('.nav__menu-openner');

closemenu.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});

// munu hiden options
const navlinkOne = document.querySelector('.nav__link-one');
const navlinkTwo = document.querySelector('.nav__link-two');
const navlinkThree = document.querySelector('.nav__link-three');
const navlinkFour = document.querySelector('.nav__link-four');

navlinkOne.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});

navlinkTwo.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});

navlinkThree.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});

navlinkFour.addEventListener('click', function() {
  menu.classList.toggle('nav-hidden');
  body.classList.remove('page__body--with-menu'); // вот это
});
