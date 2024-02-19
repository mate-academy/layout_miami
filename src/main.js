const button = document.querySelector('.form__button');

button.addEventListener('click', (e) => {
  e.preventDefault();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('.menu');
  } else {
    document.body.classList.remove('.menu');
  }
});
