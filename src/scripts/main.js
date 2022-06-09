'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('boseForm');

function handleForm(event) {
  event.preventDefault();
  document.getElementById('boseForm').reset();
}
form.addEventListener('submit', handleForm);
