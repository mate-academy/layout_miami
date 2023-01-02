'use strict';

const submit = document.querySelector('#formSubmit');

submit.addEventListener('click', submitClick, false);

function submitClick(e) {
  e.preventDefault();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});
