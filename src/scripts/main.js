'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('consultationForm').addEventListener('submit', (e) => {
  e.preventDefault();

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
});
