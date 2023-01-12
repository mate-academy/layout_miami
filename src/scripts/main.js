'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formSubmit = document.querySelector('#contact-us-form');

formSubmit.addEventListener('submit', formSubmitSuccess, false);

function formSubmitSuccess(event) {
  const warn = 'Thank you! Your form was submitted!<br>';

  document.getElementById('output-box').innerHTML = warn;

  document.getElementById('contact-us-form').reset();

  event.preventDefault();
}
