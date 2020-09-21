'use strict';

const formA = document.querySelector('.appointment__form');

formA.addEventListener('submit', (event) => {
  document.location.reload();
  event.preventDefault();
});

const formB = document.querySelector('.contact__form');

formB.addEventListener('submit', (event) => {
  document.location.reload();
  event.preventDefault();
});
