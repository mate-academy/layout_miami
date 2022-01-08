'use strict';

const elem = document.getElementById('gallery');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    elem.style.display = 'none';
  } else {
    document.body.classList.remove('page__body--with-menu');
    elem.style.display = 'block';
  }
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
  document.getElementById('email').value = '';
});
