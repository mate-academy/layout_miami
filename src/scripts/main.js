'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const form = document.querySelector('.contacts__form');

function submit(event) {
  event.preventDefault();

  form.reset();

  // eslint-disable-next-line no-undef
  alert('Your message is sent. Thank you!');
}

form.addEventListener('submit', submit);
