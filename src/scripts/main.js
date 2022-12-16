'use strict';

const formHomepage = document.getElementById('id-form-homepage');

formHomepage.addEventListener('submit', (event) => {
  event.preventDefault();
  formHomepage.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});
