'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#form').addEventListener('submit', function(event) {
  event.preventDefault();
}, true);

const form = document.querySelector('#form');

form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  form.reset();
}
