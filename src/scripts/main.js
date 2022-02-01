'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactForm = document.querySelector('.contacts__form');
const buttonSubmit = document.querySelector('.button--submit');

contactForm.addEventListener('submit', function(event) {
  buttonSubmit.animate(
    [
      {
        background: '#fff',
        transform: 'scale(1)',
      },
      {
        background: '#62ff6f',
        transform: 'scale(0.9)',
      },
      {
        background: '#fff',
        transform: 'scale(1)',
      },
    ],
    {
      delay: 100,
      duration: 600,
    }
  );
  event.preventDefault();
  contactForm.reset();
}, false);
