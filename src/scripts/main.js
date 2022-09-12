"use strict";

// PREVENT PAGE RELOAD WHEN SUBMIT //

const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll(".contact__field");

function handler(event) {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = "";
  });
}

form.addEventListener("submit", handler);
