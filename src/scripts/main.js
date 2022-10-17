'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submit = document.querySelector('#form-submit');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  event.preventDefault();
}
