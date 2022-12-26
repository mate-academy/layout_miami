'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btn = document.querySelector('#form');

btn.addEventListener('submit', function handleClick(event) {
  event.preventDefault();

  const formName = document.getElementById('first_name');
  const formEmail = document.getElementById('email');
  const formText = document.getElementById('textarea');

  formName.value = '';
  formEmail.value = '';
  formText.value = '';
});
