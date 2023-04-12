'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const myform = document.querySelector("#myform");

      myform.addEventListener("submit", checkSubmit);

      function checkSubmit(event) {
        
        event.preventDefault();
      }
      