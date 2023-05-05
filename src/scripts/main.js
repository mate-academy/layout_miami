import AOS from 'aos';
import 'aos/dist/aos.css';

const form = document.querySelector('.form-contact__content');
const emailInput = document.querySelector('.form-contact__email');


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.checkValidity()) {
    form.reset();
    window.alert('Thanks for your message!');
  }
});

AOS.init({
  duration: 1200,
});
