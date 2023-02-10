'use strict';

const bgImage = document.querySelector('.content__header-wrapper');
const submitButton = document.querySelector('.contact-us__button');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#message');
const alertContainer = document.querySelector('.alerts-container');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    bgImage.classList.add('content__header-wrapper--scroll-hide');
    document.body.classList.add('content--with-menu');
  } else {
    bgImage.classList.remove('content__header-wrapper--scroll-hide');
    document.body.classList.remove('content--with-menu');
  }
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (inputsValidation() === false) {
    return;
  };

  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';
});

function inputsValidation() {
  let text = '';
  const userNameValue = userName.value;
  const userEmailValue = userEmail.value;
  const userMessageValue = userMessage.value;

  if (userNameValue === ''
    || userEmailValue === ''
    || userMessageValue === '') {
    text = 'Please, fill in all fields.';

    makeErrorAlert(text);

    return false;
  }

  if (userNameValue.match(/[^a-z ]/gi)) {
    text = 'Please, enter your real name!';

    makeErrorAlert(text);

    return false;
  }

  if (!userEmailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    text = 'Please, enter valid e-mail addres!';

    makeErrorAlert(text);

    return false;
  }

  if (userMessageValue.replace(/[ ]+/, '').length <= 10) {
    text = 'Your message should be bigger then 10 chars';

    makeErrorAlert(text);

    return false;
  }
}

function makeErrorAlert(text) {
  const alert = document.createElement('div');

  alert.innerText = text;
  alert.classList.add('alert');
  alertContainer.appendChild(alert);

  window.addEventListener('scroll', () => {
    alert.remove();
  });

  setTimeout(() => {
    alert.remove();
  }, 3000);
}
