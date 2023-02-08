'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

let form = document.querySelector("#contacts_form")

function submitHandler(submitEvent) {
  submitEvent.preventDefault();
}

form.addEventListener("submit", submitHandler);
