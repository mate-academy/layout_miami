'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit, false);

function onSubmit(event) {
  event.preventDefault();
  form.reset();
};

// tablet version
const form1 = document.querySelector('#form1');

form1.addEventListener('submit', onSubmit1, false);

function onSubmit1(event) {
  event.preventDefault();
  form1.reset();
};
