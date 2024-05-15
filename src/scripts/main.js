"use strict";

window.addEventListener("hashchange", () => {
  console.log("test");
  if (window.location.hash === "#menu") {
    document.body.classList.add("page__body--with-menu");
  } else {
    document.body.classList.remove("page__body--with-menu");
  }
});

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
