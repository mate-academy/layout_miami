'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.getElementById('submit-button');

function submitReloadPrevent(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', submitReloadPrevent);
