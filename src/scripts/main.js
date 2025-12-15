'use strict';

// Odpal funkcję po załadowaniu strony
document.addEventListener('DOMContentLoaded', function () {

  // Pozwól na sprawdzenie, czy formularz jest prawidłowo wypełniony,
  // a następnie zablokuj domyślne zachowanie po kliknięciu na przycisk submit
  const form = document.getElementById('form');
  const submit = document.getElementById('form-submit');

  submit.addEventListener('click', function(e) {
    if (form.checkValidity()) {
      e.preventDefault();
    }
  });

  // Blokowanie scrollowania przy widocznym menu - skrypt Mateacademy.
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page--with-menu');
    } else {
      document.body.classList.remove('page--with-menu');
    }
  });

});

