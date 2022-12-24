'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');
  const emailInput = document.getElementById('email');
  const textAreaInput = document.getElementById('textarea');

  firstNameInput.value = '';
  emailInput.value = '';
  textAreaInput.value = '';
});
