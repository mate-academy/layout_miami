'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.querySelector('.contact__send');

submitButton.addEventListener('click', submitClick, false);

function submitClick(event) {
  const form = document.querySelector('.contact__form');

  form.checkValidity();
  form.reportValidity();

  event.preventDefault();
}

// #TODO Form should have validation, even if inputs are
// invisibe (over viewport) and user clicks submit button.

// #TODO Navigation menu should be scrolled on horizontal screen orintation
// on Chrome on Android device.
