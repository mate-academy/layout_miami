'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.querySelector('#submit-form');

submitButton.addEventListener('submit', submitClick, false);

function submitClick(event) {
  event.preventDefault();

  const fieldsToClear = document.querySelectorAll('.clear');

  for (const elem of fieldsToClear) {
    elem.value = '';
  }
}
