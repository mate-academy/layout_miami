'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// checklist 15, preventDefault didnt check empty form rows, I dont know js :c
document.getElementById('cons').addEventListener('click', function(event) {
  event.preventDefault();
});
