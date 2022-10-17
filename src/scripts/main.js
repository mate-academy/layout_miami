'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form__submit');

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

// found the answer here
// https:
// stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
