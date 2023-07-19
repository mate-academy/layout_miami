'use strict';
sendForm();

// ------- F U N C T I O N S -------
function sendForm() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
}
