'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const button = document.querySelector('#form-button');

button.addEventListener('click', formButtonClick, false);

function formButtonClick(event) {
  event.preventDefault();
  document.getElementById('form').reset();
}
