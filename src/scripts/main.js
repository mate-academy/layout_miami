'use strict';

const submit = document.querySelector('.formsubmit');

submit.addEventListener('submit', function(event) {
  event.preventDefault();

  submit.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});
