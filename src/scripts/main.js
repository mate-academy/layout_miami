'use strict';

const submit = document.querySelector('#submit');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  const myForm = document.getElementById('myForm');

  if (myForm.checkValidity()) {
    const warn = 'Your message has been received! Thanks for getting in touch!';

    document.getElementById('output-box').innerHTML += warn;

    event.preventDefault();
  }
}
