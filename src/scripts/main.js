'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('$menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit, false);

function onSubmit(event) {
  event.preventDefault();
  form.reset();
};
