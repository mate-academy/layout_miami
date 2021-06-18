const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll(".contact__input");
const textarea = document.querySelectorAll(".contact__textarea");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const input of inputs) {
    input.value = "";
  }
  for (const text of textarea) {
    text.value = "";
  }
});

