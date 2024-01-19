'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--no-scroll');
  } else {
    document.body.classList.remove('body--no-scroll');
  }
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formElement = form.querySelectorAll('.form__in');

  formElement.forEach(element => {
    element.value = '';
  });
});
