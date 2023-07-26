'use strict';

const formSubmit = document.getElementById('contact_form');

formSubmit.addEventListener('submit', function(event) {
  event.preventDefault();
  formSubmit.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
