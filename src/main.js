'use strict';

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.formName.value;
  const email = form.formEmail.value;
  const message = form.querySelector(".form__textarea").value;

  console.log("Form submitted!", { name, email, message });

  alert("Form submitted without reloading!");
});

