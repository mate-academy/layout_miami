'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

// prevent default form submit

const form = document.getElementById('form');
const respond = document.getElementById('email');
const formButton = document.querySelector('.contact__button');
const allItems = document.querySelectorAll('.form-field');

formButton.addEventListener('click', function(e) {
  e.preventDefault();

  const reqExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

  allItems.forEach(item => {
    if (!item.value) {
      item.classList.add('form--request');
    } else {
      item.classList.remove('form--request');
    }
  });

  if (!reqExp.test(respond.value)) {
    respond.classList.add('form--request');
  } else if (allItems[2].value) {
    respond.classList.remove('form--request');
    form.reset();
  }
});
