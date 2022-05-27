'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__header--with-menu');
  } else {
    document.body.classList.remove('page__header--with-menu');
  }
});

const formClick = document.getElementById('contact-form');

formClick.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  formClick.reset();
}
