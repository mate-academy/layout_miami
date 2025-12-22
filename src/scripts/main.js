'use strict';

const contactForm = document.querySelector(".contact");
contactForm.addEventListener("submit", function(f) {
  f.preventDefault();

  const formData = new FormData(contactForm);

  fetch("#", { // <- server address
    method: "POST",
    body: formData
  })

  this.reset();
});
