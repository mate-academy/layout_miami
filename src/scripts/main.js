'use strict';

const form = document.getElementById('my-form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        console.log('Form sent successfully!');
        form.reset();
      } else {
        console.error('An error occurred while sending the form.');
        form.reset();
      }
    })
    .catch(error => {
      console.error('Network error:', error);
    });
  });
}
