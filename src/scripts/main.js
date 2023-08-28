'use strict';

const form = document.querySelector('.form');

const [...fields] = document.querySelectorAll('.form__field');

const textArea = document.querySelector('.form__field--textarea');

const [first, second] = [...fields];

form.addEventListener('submit', prevent, false);

function prevent(event) {
  event.preventDefault();
  first.value = '';
  second.value = '';
  textArea.value = '';
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
