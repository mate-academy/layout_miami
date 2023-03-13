'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');
const input1 = document.querySelector('.form-field__input1');
const input2 = document.querySelector('.form-field__input2');
const textarea = document.querySelector('.form-field__textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  input1.forEach(function(elem) {
    elem.value = '';
  });

  input2.forEach(function(elem) {
    elem.value = '';
  });
  textarea.value = '';
});
