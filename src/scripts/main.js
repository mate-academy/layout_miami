'use strict';

document.querySelector('.logo').addEventListener('click', function(event) {
  event.preventDefault(); // цей рядок запобігає перезавантаженню сторінки
  window.location.href = './index.html'; // змінюємо URL на адресу головн стор
});

document.querySelector('.contactForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset(); // очищення полів форми
  });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
