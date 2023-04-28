'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('#button-secondary');
const form = document.querySelector('form');

button.addEventListener('click', buttonClick, false);
button.addEventListener('submit', buttonClick);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
}
