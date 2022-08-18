'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);


const forma = document.querySelector('.contact-us__form');
 const inputs = document.querySelectorAll('.contact-us__field');

 forma.addEventListener('submit', (event) => {
   event.preventDefault();

   inputs.forEach(elem => {
     elem.value = '';
   });
 });
