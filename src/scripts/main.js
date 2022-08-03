const form = document.getElementById('send-form');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
});
