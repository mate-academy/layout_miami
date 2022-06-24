'use strict';
const form = document.querySelector(".contact-us__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.reset();
    window.location.href = "#";
});