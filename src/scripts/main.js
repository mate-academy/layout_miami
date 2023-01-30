'use strict';

window.addEventListener('hashchange', addaptClasses);
window.addEventListener('load', addaptClasses);

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

function addaptClasses() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}
