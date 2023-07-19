'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function handleSubmit(event) {
  event.target.reset();
  event.preventDefault();
}

const form = document.querySelector('#formId');

form.addEventListener('submit', handleSubmit);
