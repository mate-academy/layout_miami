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
