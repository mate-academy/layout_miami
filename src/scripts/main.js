window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});
