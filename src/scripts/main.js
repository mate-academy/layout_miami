'use strict';
/* eslint-disable */
/* eslint-enable */

const scroll = window.innerWidth - document.body.clientWidth;
const checkbox = document.querySelector('input[name=checkbox]');

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('page__body--with-menu');
    document.body.style.paddingRight = `${scroll}px`;
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.body.style.paddingRight = null;
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '') {
    document.body.classList.remove('page__body--with-menu');
    document.body.style.paddingRight = null;
    checkbox.checked = false;
  }
});
