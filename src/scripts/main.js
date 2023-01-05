"use strict";

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#menu") {
    document.body.classList.add("page__body--with-menu");
  } else {
    document.body.classList.remove("page__body--with-menu");
  }
});

document
  .getElementById("send-contacts-button")
  .addEventListener("click", submitForm);

function submitForm() {
  document.getElementsByClassName("contacts__form")[0].reset();
}
