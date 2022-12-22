'use strict';

const form = document.querySelector('#contact-form');

form.addEventListener('submit', submitClick, false);

function submitClick(event) {
  event.preventDefault();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
