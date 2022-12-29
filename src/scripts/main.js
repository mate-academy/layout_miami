'use strict';

const submitForm = document.querySelector('.contacts__form');
const input = document.querySelectorAll('.js-input');
const focusItems = document.querySelectorAll('.focus');
const focusMenuItems = document.querySelectorAll('.focus--menu');

function onSubmit(event) {
  event.preventDefault();

  for (const item of input) {
    item.value = '';
  }
}

submitForm.addEventListener('submit', onSubmit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with--menu');

    for (const item of focusItems) {
      item.classList.add('focus--disabled');
    }

    for (const item of focusMenuItems) {
      item.classList.add('focus--menu--enabled');
    }
  } else {
    document.body.classList.remove('page__body--with--menu');

    for (const item of focusItems) {
      item.classList.remove('focus--disabled');
    }

    for (const item of focusMenuItems) {
      item.classList.remove('focus--menu--enabled');
    }
  }
});
