'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('.contact__form').addEventListener('submit', (e) => {
  e.preventDefault();

  // const name = document.getElementById('name').value;
  // const email = document.getElementById('email').value;
  // const message = document.getElementById('message').value;
  // To w razie W na przyszlosc sobie zostawilem :)

  alert("Form has been sent! We will contact you as fast as it will be possible!");
  e.target.reset();
});
