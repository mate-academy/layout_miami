'use strict';

const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('nav-container--active');
  hamburger.classList.toggle('hamburger--active');
});

const headerNav = document.querySelector('.nav');
const burgerButton = document.querySelector('.hamburger');

headerNav.addEventListener('click', (event) => {
  burgerButton.click();
});

window.addEventListener('scroll', function() {
  navContainer.classList.remove('nav-container--active');
  hamburger.classList.remove('hamburger--active');
});


const feedbackForm = document.querySelector('.contact-us-form');
let answer = 'Thank you for your message.';

answer += '\nWe will call you back as soon as possible.';

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of feedbackForm.elements) {
    input.value = '';
  }

  window.alert(answer);
});
