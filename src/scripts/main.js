const handleMenuScroll = () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
};

window.addEventListener('hashchange', handleMenuScroll);

handleMenuScroll();

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const contactContainer = document.querySelector('.contact');
    contactContainer.innerHTML = `
    <div style="text-align: left; animation: fadeIn 0.5s;">
      <h2 class="title">Thank you!</h2>
      <p style="font-family: Inter, sans-serif; margin-top: 10px;">
        Your message has been sent. We will get back to you soon.
      </p>
    </div>
  `
  });
}
