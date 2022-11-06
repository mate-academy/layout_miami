'use strict';

const form = document.querySelector('.form');

function clearInputs() {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    input.value = '';
  }

  const textarea = document.querySelector('textarea');

  textarea.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearInputs();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
