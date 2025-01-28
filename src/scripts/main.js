/* eslint-disable max-len */
const button = document.querySelector('.form__button');

button.addEventListener('click', (event) => {
  event.preventDefault();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('.menu');
  } else {
    document.body.classList.remove('.menu');
  }
});
