'use strict';

document.getElementById("contact__form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("contact__form").reset();
  window.alert("Form sent!");
});
