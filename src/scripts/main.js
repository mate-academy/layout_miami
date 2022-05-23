'use strict';

document.getElementById('contactForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('message')[0].value = '';
  });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
