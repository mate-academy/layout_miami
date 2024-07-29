const form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit', formsubmit);

function formsubmit(event) {
  event.preventDefault();
}
