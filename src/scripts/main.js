'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const checkbox = document.querySelector('#form-button');

checkbox.addEventListener('click', checkboxClick, false);

function checkboxClick(event) {
  event.preventDefault();

  document.getElementById('contacts__form').reset();
}
