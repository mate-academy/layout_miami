'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const form = document.getElementById('contacts__form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});
