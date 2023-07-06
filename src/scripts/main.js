'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const clearButton = document.getElementById('button');
const inputs = document.querySelectorAll('.contacts__field');

clearButton.addEventListener('click', function(e) {
  e.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
