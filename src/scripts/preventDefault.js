'use strict';

function preventFunction(e) {
  e.preventDefault();
}

const form = document.querySelector('.form');

form.addEventListener('submit', function() {
  preventFunction();
});
