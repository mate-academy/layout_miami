'use strict';

const openMenuBtn = document.querySelector('.icon--menu');
const closeMenuBtn = document.querySelector('.icon--close');
const nav = document.querySelector('.nav');

const openMenu = () => {
  nav.classList.add('page__nav--open');
};

const closeMenu = () => {
  nav.classList.remove('page__nav--open');
};

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.submit();
  e.target.reset();
});
