'use strict';

const checkForOpenMenu = () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-open');
  } else {
    document.body.classList.remove('page__body--menu-open');
  }
};

window.addEventListener('hashchange', () => {
  checkForOpenMenu();
});

const formElement = document.getElementById('form');
// const nameElement = document.getElementById('formName');
// const emailElement = document.getElementById('formEmail');
// const textareaElement = document.getElementById('formTextarea');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  formElement.reset();
  window.alert('Form submitted!');
});

checkForOpenMenu();
