'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  window.location.href = '#';

  for (const input of inputs) {
    input.value = '';
  }
});
