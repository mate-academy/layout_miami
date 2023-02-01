'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('form').addEventListener(
  'click', stopDefAction, false
);

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('#name, #email, #message');

  inputs.forEach(input => {
    input.value = '';
  });
});
