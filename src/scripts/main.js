'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

let input = document.querySelector("form");

input.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Form is sent!');
});
