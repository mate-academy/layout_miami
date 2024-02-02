'use strict';

const form = document.getElementById('message');

function preventRefresh(event) {
  event.preventDefault();
}

form.addEventListener('submit', preventRefresh);
