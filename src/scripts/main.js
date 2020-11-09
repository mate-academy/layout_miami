'use strict';

const formsAtPage = document.querySelectorAll('form');

formsAtPage.forEach(form => {
  form.addEventListener('submit', event => {
    document.location.reload();
    event.preventDefault();
  });
})

