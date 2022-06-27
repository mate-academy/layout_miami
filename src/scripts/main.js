'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector("#submit").addEventListener("click", function(event) {
  document.getElementById("output-box").innerHTML += "Sorry! Currently the form may not be submitted!<br>";
  event.preventDefault();
  }, false);
