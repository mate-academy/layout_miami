'use strict';

const formHomepage = document.getElementById('id-form-homepage');

formHomepage.addEventListener('submit', (event) => {
  event.preventDefault();
  formHomepage.reset();
});
