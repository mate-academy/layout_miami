'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('.contact-us__button')
  .addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-us__form').reset();
  });
