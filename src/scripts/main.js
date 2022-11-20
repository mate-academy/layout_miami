'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  form.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
