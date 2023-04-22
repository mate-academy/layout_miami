'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

// const submitButton = document.querySelector('#submit');

// submitButton.addEventListener('click', submitButtonClick, false);

// function submitButtonClick(event) {
//   event.preventDefault();
// }
