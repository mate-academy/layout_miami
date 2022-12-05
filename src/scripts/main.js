'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userData = {
    userName: contactForm.querySelector('[name="user-name"]').value,
    userEmail: contactForm.querySelector('[name="user-email"]').value,
    userComment: contactForm.querySelector('[name="user-message"]').value,
  };

  window.alert(`Thank you ${userData.userName}, we will contact you!`);
  contactForm.reset();
});
