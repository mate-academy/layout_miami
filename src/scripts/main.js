'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');
const respond = document.getElementById('email');
const formButton = document.querySelector('.contact-us__button');
const allItems = document.querySelectorAll('.form-field');

formButton.addEventListener('click', function(e) {
  e.preventDefault();

  const reqExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

  allItems.forEach(item => {
    if (!item.value) {
      item.classList.add('form-field--unvalid');
    } else {
      item.classList.remove('form-field--unvalid');
    }
  });

  if (!reqExp.test(respond.value)) {
    respond.classList.add('form-field--unvalid');
  } else if (allItems[2].value) {
    respond.classList.remove('form-field--unvalid');
    form.reset();
  }
});
