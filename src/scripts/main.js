/* eslint-disable quotes */
"use strict";

// lock body on menu open
const iconBurger = document.querySelector(".navbar__icon--type-burger");
const iconClose = document.querySelector(".navbar__icon--type-close");

iconBurger.addEventListener("click", () =>
  document.body.classList.add("page__body--lock")
);

iconClose.addEventListener("click", () =>
  document.body.classList.remove("page__body--lock")
);

// form submit
const form = document.querySelector(".contact__form");

form.addEventListener("submit", (event) => event.preventDefault());
