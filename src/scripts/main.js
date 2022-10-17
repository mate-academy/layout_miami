'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  };
});

const checkbox = document.getElementById('button-send');
const inputs = document.getElementsByClassName('contacts__field');

checkbox.addEventListener('click', clearInput);

function clearInput(e) {
  for (const input of inputs) {
    input.value = '';
  }
  e.preventDefault();
}
