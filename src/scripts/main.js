'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--overflow-hidden');
  } else {
    document.body.classList.remove('page__body--overflow-hidden');
  }
});

const formSubmitButton = document.querySelector('.contact-us__form-submit');

formSubmitButton.addEventListener('click', prevDefFromButton, false);

function prevDefFromButton(event) {
  event.preventDefault();
};
