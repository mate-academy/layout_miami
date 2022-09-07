'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.contacts__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
