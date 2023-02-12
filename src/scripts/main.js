'use strict';

const menu = document.querySelector('.nav');

const openbutton = document.querySelector('.header__toggle');

openbutton.addEventListener('click', function() {
  menu.classList.remove('nav--closed');
  menu.classList.add('nav--open');
});

const closebutton = document.querySelector('.nav__button-close');

closebutton.addEventListener('click', function() {
  menu.classList.remove('nav--open');
  menu.classList.add('nav--closed');
});

window.addEventListener('hashchange', function() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body-menu--opened');
  } else {
    document.body.classList.remove('body-menu--opened');
    menu.classList.add('nav--closed');
  }
});

const FormPage = document.querySelector('#form');

FormPage.addEventListener('submit', function(event) {
  event.preventDefault();

  FormPage.reset();
});
