'use strict';
function handleFormSubmit(e) {
  e.preventDefault();
}

const form = document.querySelector('.form-contact');
form.addEventListener('submit', handleFormSubmit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-content--with-menu');
  } else {
    document.body.classList.remove('page-content--with-menu');
  }
});
