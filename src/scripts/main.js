'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    document.onkeydown = function(key) {
      if (key.which === 9) {
        return false;
      }
    };
  } else {
    document.body.classList.remove('page__body--with-menu');

    document.onkeydown = function(key) {
      if (key.which === 9) {
        return true;
      }
    };
  }
});

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
