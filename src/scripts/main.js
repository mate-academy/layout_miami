window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const subscribeForm = document.querySelector('form--js');
subscribeForm.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});
