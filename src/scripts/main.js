'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

var form = document.getElementById("form");
function handleForm(event) {event.preventDefault();}
form.addEventListener('submit', handleForm);
