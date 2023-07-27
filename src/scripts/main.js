'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('form').addEventListener('submit', function(event) {
  const nameInput = this.elements['name'];
  const emailInput = this.elements['email'];
  const messageInput = this.elements['message'];

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    window.alert('Please fill in all the fields');
    event.preventDefault();
  }
});
