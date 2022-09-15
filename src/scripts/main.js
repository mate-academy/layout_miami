'use strict';

// document.querySelectorAll('.contact-us__form')
//   .addEventListener('submit', (e) => {
//     e.preventDefault();
//   });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
