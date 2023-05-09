'use strict';

/* const menuOpen = document.querySelectorAll('[class^="menu"]'); */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
    /* menuOpen.attr('tabindex', -1); */
  }
});

const form = document.getElementById('form');

function submitForm(event) {
  event.preventDefault();
  window.scrollTo(0, 0);
  form.reset();
}

form.addEventListener('submit', submitForm);
