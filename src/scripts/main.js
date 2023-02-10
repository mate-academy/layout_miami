'use strict';

// toggle tabIndexes for better accessability
const toggleTabIndexes = (elements) => {
  const toggleTabIndex = (element) => {
    element.tabIndex === -1 ? (element.tabIndex = 0) : (element.tabIndex = -1);
  };

  elements.forEach((element) => {
    toggleTabIndex(element);
  });
};

const navLinks = document.querySelectorAll('.nav__link');
const navLogo = document.getElementById('navLogo');
const openNavButton = document.getElementById('openNavButton');
const closeNavButton = document.getElementById('closeNavButton');

// toggle tab indexes of navigation elements on load
toggleTabIndexes([...navLinks, navLogo, closeNavButton]);

// toggle navigation
const toggleNavigation = () => {
  const body = document.querySelector('.page__body');
  const hero = document.querySelector('.section-hero');

  if (body.classList.contains('page__body--with-menu')) {
    body.classList.toggle('page__body--with-menu');
    hero.classList.toggle('section-hero--nav-opened');
    openNavButton.focus();
  } else {
    hero.classList.toggle('section-hero--nav-opened');

    setTimeout(() => {
      body.classList.toggle('page__body--with-menu');
      navLogo.focus();
    }, 300);
  }

  const links = document.querySelectorAll('a');
  const buttons = document.querySelectorAll('button');
  const inputs = document.querySelectorAll('input');
  const textareas = document.querySelectorAll('textarea');

  toggleTabIndexes(links);
  toggleTabIndexes(buttons);
  toggleTabIndexes(inputs);
  toggleTabIndexes(textareas);
};

const navToggleButtons = [
  document.getElementById('openNavButton'),
  document.getElementById('closeNavButton'),
  ...document.querySelectorAll('.nav__link'),
];

navToggleButtons.forEach((button) => {
  button.addEventListener('click', toggleNavigation);
});

// form validation
const username = document.getElementById('username');
const userEmail = document.getElementById('userEmail');
const userMessage = document.getElementById('userMessage');
const submitButton = document.getElementById('formSubmitButton');
const errorMessageElement = document.getElementById('formErrorMessage');
const successMessageElement = document.getElementById('formSuccessMessage');

const emailIsValid = (email) => {
  return RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g).test(email);
};

const displayFormError = (message) => {
  successMessageElement.style.display = 'none';
  errorMessageElement.innerText = message;
  errorMessageElement.style.display = 'block';

  setTimeout(() => {
    errorMessageElement.innerText = '';
    errorMessageElement.style.display = 'none';
  }, 5000);
};

const postSubmitActions = () => {
  errorMessageElement.style.display = 'none';
  successMessageElement.style.display = 'block';

  [username, userEmail, userMessage].forEach((field) => {
    field.value = '';
  });

  setTimeout(() => {
    successMessageElement.style.display = 'none';
  }, 2500);
};

const validate = (e) => {
  e.preventDefault();

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

  postSubmitActions();

  return true;
};

submitButton.addEventListener('click', validate);
