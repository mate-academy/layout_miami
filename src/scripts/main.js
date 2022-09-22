'use strict';

const formField = document.querySelector('#formField');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

formField.addEventListener('submit', buttonClick);

function buttonClick(e) {
  e.preventDefault();
  formField.reset();
}
