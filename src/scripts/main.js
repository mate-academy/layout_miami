'use strict';
/* eslint-disable */
/* eslint-enable */

const checkbox = document.querySelector('input[name=checkbox]');

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '') {
    document.body.classList.remove('page__body--with-menu');
  }
});
