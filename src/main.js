'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  form.reset();
  event.preventDefault();
});

document.addEventListener('click', function(e) {
  if (e.target.name === 'exhibitions') {
    e.preventDefault();
  }
});

document.addEventListener('click', function(e) {
  const eClassList = e.target.classList;

  if (eClassList.contains('exhibition__description-link')
    || eClassList.contains('event__name')
  ) {
    e.preventDefault();
  }
});
