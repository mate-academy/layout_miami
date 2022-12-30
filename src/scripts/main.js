'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btn = document.getElementById('submit');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('#name, #email, #message');

  inputs.forEach(input => {
    input.value = '';
  });
});
