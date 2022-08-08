'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-on');
  } else {
    document.body.classList.remove('page__body--menu-on');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('send').addEventListener(
  'click', stopDefAction, false
);

function resField(evt) {
  document.querySelector('#name').value = '';
  document.querySelector('#mail').value = '';
  document.querySelector('#textarea').value = '';
}

document.getElementById('send').addEventListener(
  'click', resField, false
);
