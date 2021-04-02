'use strict';

const forms = document.querySelectorAll('.consultation__user');

for (const form of forms) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
};
