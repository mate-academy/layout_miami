'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--nav-open');
  } else if (window.location.hash !== '#nav') {
    document.body.classList.remove('page__body--nav-open');
  }
});

const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll('.contact__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
