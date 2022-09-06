'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('.contacts__form').addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelectorAll('.contacts__field').forEach((el) => {
    el.value = '';
  });
});
