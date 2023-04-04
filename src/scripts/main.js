'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submit = document.querySelector('#myForm');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  event.preventDefault();
  event.target.reset();

  return false;
}
