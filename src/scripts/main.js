'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#contacts_form');
const inputs = [...form.children];

function submitHandler(submitEvent) {
  submitEvent.preventDefault();
  inputs.forEach(element => {
    element.value = ''
  });
}

form.addEventListener('submit', submitHandler);

