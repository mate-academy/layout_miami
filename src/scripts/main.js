'use strict';

function preventMobileScroll(event) {
  event.preventDefault();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
  // prevent touch scroll
    document.addEventListener('touchmove', preventMobileScroll,
      { passive: false });

    const elementHtml = document.documentElement;

    elementHtml.classList.add('page__html--with-menu');
  } else {
    const elementHtml = document.documentElement;

    elementHtml.classList.remove('page__html--with-menu');

    // usuwam touch event
    document.removeEventListener('touchmove', preventMobileScroll,
      { passive: false });
  }
});

const form = document.getElementById('myForm');

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
