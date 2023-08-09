'use strict';

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

const iconPhone = document.querySelector('.icon--phone');
const hiddenTel = document.querySelector('.icon__additional--phone');

iconPhone.addEventListener('mouseenter', () => {
  hiddenTel.style.display = 'block';
});

iconPhone.addEventListener('mouseleave', () => {
  hiddenTel.style.display = 'none';
});
