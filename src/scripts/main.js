'use strict';

document.querySelector('#form').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    document.body.classList.remove('page__body--withMenu');
  } else if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--withMenu');
  }
});
