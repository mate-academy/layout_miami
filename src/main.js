'use strict';

const form = document.getElementById('orderform');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--menu');
}

form.addEventListener(
  'submit',function(evt) {
    evt.preventDefault();
    form.reset();
  }
);
