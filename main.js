'use strict';

document.documentElement.style.setProperty('--scrollbar-width',
  (window.innerWidth - document.documentElement.clientWidth) + 'px');

const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});