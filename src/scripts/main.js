'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
  let name = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let message = document.getElementById('input-textarea').value;

  if (name !== "" && email !== "" && message !== "") {
    alert("Your form send successfully");
  }  else {
    alert("Your form is invalid");
  }

  e.preventDefault();
    form.reset();
});
