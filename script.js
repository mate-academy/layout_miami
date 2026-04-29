const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Dane lecą w tle na serwer...");
    form.reset();
  });
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
