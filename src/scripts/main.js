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

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  formElement.reset();
  window.alert('Form submitted!');
});

checkForOpenMenu();
