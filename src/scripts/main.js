'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-us__form');
  if (!contactForm) return;

  const SUCCESS_CLASS = 'form__success';

  function showSuccess(message) {
    let msg = contactForm.querySelector('.' + SUCCESS_CLASS);
    if (!msg) {
      msg = document.createElement('div');
      msg.className = SUCCESS_CLASS;
      msg.setAttribute('role', 'status');
      msg.setAttribute('aria-live', 'polite');
      contactForm.appendChild(msg);
    }
    msg.textContent = message;

    if (msg._timeoutId) clearTimeout(msg._timeoutId);
    msg._timeoutId = setTimeout(() => msg.remove(), 4000);
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    contactForm.reset();
    showSuccess('Thank you — your message has been sent.');
  });
});
