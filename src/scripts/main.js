'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', submitForm);

function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value !== '' && emailInput.value.includes('@')
  && messageInput.value !== '') {
    form.reset();
  } else {
    window.alert('Please fill in all fields.'
    + ' Сheck the correctness of the entered email');
  }
}
