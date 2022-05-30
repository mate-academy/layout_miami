'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const form = document.getElementById('myForm');

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
