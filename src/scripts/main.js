'use strict';
if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--with-menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
});
