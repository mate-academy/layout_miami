'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const defaultSubmit = document.querySelector('#form');

defaultSubmit.addEventListener('submit', addDefaultValue);

function addDefaultValue(event) {
  event.preventDefault();
}
