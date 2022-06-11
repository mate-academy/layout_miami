'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#submit').addEventListener('click', function(event) {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#message').value = 'Thank you for contacting us!';
  event.preventDefault();
}, false);
