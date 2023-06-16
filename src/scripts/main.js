'use strict';

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidName(name) {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  }

  if (!isValidName(nameInput.value.trim())) {
    alert('Please enter a valid name');
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email');
    return;
  }

  form.reset();

  const currentSection = document.getElementById('contacts');
  currentSection.scrollIntoView({ behavior: 'smooth' });
});

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
