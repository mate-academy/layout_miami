'use strict';

const nav = document.querySelector('.nav');
const toggler = document.querySelector('#toggler');
const togglerClo = document.querySelector('#togglerClo');

toggler.addEventListener('click', () => {
  nav.classList.add('nav--active');
});

togglerClo.addEventListener('click', () => {
  nav.classList.remove('nav--active');
});
