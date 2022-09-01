'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btn = document.querySelector('.contact-us__button');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.contact-us__field');

  inputs.forEach(input => {
    input.value = '';
  });
});
// onsubmit="return false"
