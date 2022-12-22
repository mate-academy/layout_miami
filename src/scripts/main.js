'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const defaultSubmit = document.querySelector('.contacts__field-button');

defaultSubmit.addEventListener('click', addDefaultValue);

function addDefaultValue(event) {
  event.preventDefault();
}
