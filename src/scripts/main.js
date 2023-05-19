'use strict';

function submitForm(event) {
  event.preventDefault();
  document.querySelector('#form').reset();
}

document.querySelector('#form').addEventListener('submit', submitForm);

document.querySelector('#menu-icon').addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
});

document.querySelector('#cross-icon').addEventListener('click', () => {
  document.body.classList.remove('page__body--with-menu');
});
