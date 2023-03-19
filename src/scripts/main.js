/* eslint-disable no-unused-vars */
/* eslint-disable strict */
function submitForm(event) {
  event.preventDefault();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
