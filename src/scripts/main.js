'use strict';

// FORMULARZ
const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
}

// BLOKADA SCROLLA POD MENU
function toggleMenuScroll() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}

window.addEventListener('hashchange', toggleMenuScroll);

toggleMenuScroll();
