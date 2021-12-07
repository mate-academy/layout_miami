'use strict';

const link = document.getElementsByTagName('a');
const input = document.getElementsByTagName('input');
const textarea = document.getElementsByTagName('textarea');
const img = document.getElementsByTagName('img');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    for (let i = 12; i < link.length; i++) {
      link[i].setAttribute('tabindex', '-1');
    }

    for (let i = 0; i < input.length; i++) {
      input[i].setAttribute('tabindex', '-1');
    }

    textarea[0].setAttribute('tabindex', '-1');

    for (let i = 0; i < img.length; i++) {
      img[i].setAttribute('hidden', 'true');
    }
  } else {
    document.body.classList.remove('page__body--with-menu');

    for (let i = 12; i < link.length; i++) {
      link[i].removeAttribute('tabindex');
    }

    for (let i = 0; i < input.length; i++) {
      input[i].removeAttribute('tabindex');
    }

    textarea[0].removeAttribute('tabindex');

    for (let i = 0; i < img.length; i++) {
      img[i].removeAttribute('hidden');
    }
  }
});

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__form-input');
const textareas = document.querySelector('.contact-us__form-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((elem) => {
    elem.value = '';
  });

  textareas.value = '';
});
