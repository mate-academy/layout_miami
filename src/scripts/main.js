'use strict';

const form = document.querySelector('.form');

const [...inputs] = document.querySelectorAll('.form__input');

const textArea = document.querySelector('.form__input--textarea')

const [first, second] = [...inputs];

console.log(first.value);

console.log(textArea.value);

form.addEventListener("submit", prevent, false);

function prevent(event) {
  event.preventDefault();
  first.value = '';
  second.value = '';
  textArea.value = '';
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});