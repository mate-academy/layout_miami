'use strict';

function stopDefAction(event) {
  document.getElementById('consultationForm').reset();
  event.preventDefault();
}

document.getElementById('consultationForm').addEventListener(
  'submit', stopDefAction, false
);
