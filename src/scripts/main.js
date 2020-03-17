'use strict';

const consultationForm = document.querySelector('.consultation__form');
const contactForm = document.querySelector('.contact__form');

const addOnSubmit = (element) => {
  return element.addEventListener('submit', ev => {
    ev.preventDefault();
    ev.target.reset();
  });
};

addOnSubmit(consultationForm);
addOnSubmit(contactForm);
