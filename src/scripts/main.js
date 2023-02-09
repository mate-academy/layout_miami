'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

if (window.location.hash !== '') {
  window.location.replace(window.location.pathname);
}

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
