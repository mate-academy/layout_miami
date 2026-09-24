'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menuLinks = document.querySelectorAll('.links__link');

burger.addEventListener('click', () => {
  document.body.classList.add('page__with-menu');
});

close.addEventListener('click', () => {
  document.body.classList.remove('page__with-menu');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('page__with-menu');
  });
});
