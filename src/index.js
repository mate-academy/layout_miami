'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const inputEmail = document.getElementById('email');
const inputName = document.getElementById('name');

document.querySelector('#submit').addEventListener('click', function(event) {
  event.preventDefault();

  if (inputName.value === '' || inputEmail.value === '') {
    window.alert('Please, enter your details');
  }
  inputEmail.value = '';
  inputName.value = '';
}, false);
