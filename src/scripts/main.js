'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.contact-us__field');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  inputs.forEach(input => {
      input.value = ''
  })
});
