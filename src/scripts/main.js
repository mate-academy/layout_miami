'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    const elementHtml = document.documentElement;

    elementHtml.classList.add('page__html--with-menu');
  } else {
    const elementHtml = document.documentElement;

    elementHtml.classList.remove('page__html--with-menu');
  }
});

const form = document.getElementById('myForm');

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
