'use strict';

// OFF VERTICAL SCROLL WHEN OPEN MENU //

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// OFF PAGE RELOAD WHEN SUBMIT //

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
