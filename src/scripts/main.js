'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Zablokuj domyślne zachowanie formularza
    const submitButton = document.getElementById("submit-btn");
    submitButton.disabled = true; // Wyłącz przycisk
    console.log("Formularz został wysłany, przycisk wyłączony.");
});
