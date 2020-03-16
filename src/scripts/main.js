'use strict';

const consultationForm = document.querySelector('.consultation__form');

consultationForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
});

const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
});
