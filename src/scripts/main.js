'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contacts = document.querySelectorAll('.contact__info');
const contactButton = document.querySelector('.contact__button');
const contactForm = document.querySelector('.contact__user');

contactButton.addEventListener('click', function(event) {
  if (contacts[0].checkValidity() && contacts[1].checkValidity()
  && contacts[2].checkValidity()) {
    event.preventDefault();
    contactForm.reset();
  }
});
