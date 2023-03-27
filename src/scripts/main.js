'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  window.alert('Thank you for the application!');
  // const warn = 'Thank you for the application!<br>';

  // document.getElementById('output-box').innerHTML += warn;
}
