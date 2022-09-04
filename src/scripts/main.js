'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const myForm = document.querySelector('.my-form');

const sendButton = document.getElementById('clicks');

sendButton.addEventListener('click', function(event) {
  const userEmail = document.getElementById('email').value;
  const userName = document.getElementById('name').value;

  if (
    userEmail && userName
    && /^[\w-]+@([\w-]+)+[\w-]{2,4}$/g.test(userEmail)) {
    event.preventDefault();
    myForm.reset();
  }
});

myForm.addEventListener('clicks', sendButton);
