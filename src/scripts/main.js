'use strict';
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");

console.log(inputs)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
      console.log(input.value);
      input.value = "";
  });
});
