'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* function validateForm() {
  const a = document.forms['contactUs']['name'].value;

  if (a == '') {
    alert('Name must be filled out');

    return false;
  }
} */
