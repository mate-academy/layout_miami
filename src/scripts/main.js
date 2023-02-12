'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--menu-opened');
  } else {
    document.body.classList.remove('page--menu-opened');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
  document.getElementById('contacts_form').reset();
}

document.getElementById('contacts_form').addEventListener(
  'submit', stopDefAction, false
);
