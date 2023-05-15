'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const checkbox = document.querySelector('#submit-button');

checkbox.addEventListener('click', checkboxClick, false);

function checkboxClick(event) {
  event.preventDefault();
}
