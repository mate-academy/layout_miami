const contactForm = document.getElementById('contact-us-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();

  const submitButton = document.getElementById('contact-us-submit');

  submitButton.blur();

  const orgContent = submitButton.textContent;

  submitButton.classList.add('send');
  submitButton.setAttribute('disabled', '');
  submitButton.textContent = 'Your message has been sent!';

  setTimeout(function() {
    submitButton.classList.remove('send');
    submitButton.removeAttribute('disabled');
    submitButton.textContent = orgContent;
  }, 3000);
});
