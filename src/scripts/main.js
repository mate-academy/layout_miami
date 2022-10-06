'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
