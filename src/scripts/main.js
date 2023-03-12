'use strict';

document.querySelector('.contactForm')
  .addEventListener('submit', function(event) {
    this.reset(); // очищення полів форми
  });
