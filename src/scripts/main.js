window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* document.querySelector('#id-form').addEventListener('submit',
function(evetn) {
  evetn.preventDefault();
});
*/
