'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

document.getElementById('openLink').addEventListener('click', function(event) {
  event.preventDefault();

  const url = this.getAttribute('href');

  window.open(url, '_blank');
});
