'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  };
});

const inputs = document.getElementsByClassName('contacts__field');
const forms = document.getElementById('contacs-form');

forms.addEventListener('submit', clearInput);

function clearInput(e) {
  e.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
}
