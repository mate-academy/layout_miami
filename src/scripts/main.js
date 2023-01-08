'use strict';

const formClass = document.querySelector('.form');

formClass.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  formClass.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});
