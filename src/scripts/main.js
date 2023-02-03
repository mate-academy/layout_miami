'use strict';

// nav menu
document.getElementById('openNavButton').addEventListener('click', () => {
  document
    .querySelector('.section-hero')
    .classList.add('section-hero--nav-opened');
  document.body.classList.add('page__body--with-menu');
});

const closeNavElements = [
  document.getElementById('closeNavButton'),
  ...document.querySelectorAll('.nav__link'),
];

closeNavElements.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.body.classList.remove('page__body--with-menu');

    document
      .querySelector('.section-hero')
      .classList.remove('section-hero--nav-opened');
  });
});

// form validation

const submitButton = document.getElementById('formSubmitButton');

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const displayFormError = (message) => {
  const errorMessageElement = document.getElementById('formErrorMessage');

  errorMessageElement.innerText = message;
  errorMessageElement.style.display = 'block';

  setTimeout(() => {
    errorMessageElement.innerText = '';
    errorMessageElement.style.display = 'none';
  }, 5000);
};

const validate = (e) => {
  e.preventDefault();

  const username = document.getElementById('username');
  const userEmail = document.getElementById('userEmail');
  const userMessage = document.getElementById('userMessage');

  if (username.value === '') {
    displayFormError('Please enter your username!');
    username.focus();

    return false;
  }

  if (userEmail.value === '') {
    displayFormError('Please enter your email address!');
    userEmail.focus();

    return false;
  }

  if (!emailIsValid(userEmail.value)) {
    displayFormError('Please enter a valid email address!');
    userEmail.focus();

    return false;
  }

  if (userMessage.value === '') {
    displayFormError('Please enter your message!');
    userMessage.focus();

    return false;
  }

  return true;
};

submitButton.addEventListener('click', validate);
