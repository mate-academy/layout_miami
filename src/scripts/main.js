'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#contact-form')
  .addEventListener('submit', function(event) {
    document.querySelector('#submit-button').animate([
      { background: '#fff' },
      { background: '#62ff6f' },
      { background: '#fff' },
    ],
    {
      delay: 600,
      duration: 600,
    }
    );

    event.preventDefault();
  }, false);
