'use strict';

// toggle body classes when menu is opened/closed
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--menu-opened');
  } else {
    document.body.classList.remove('page__content--menu-opened');
  }
});

// don't refresh page on submit
const form = document.getElementById('#form');

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);
