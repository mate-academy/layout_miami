// Dodaj klasę "touched" po opuszczeniu pola (blur)
const inputs = document.querySelectorAll('.form__input, .form__input--textarea');

inputs.forEach((input) => {
  input.addEventListener('blur', () => {
    if (input.value.trim() !== '') {
      input.classList.add('touched');
    }
  });
});

// Dodaj klasę "touched" do wszystkich pól przy wysłaniu formularza
const form = document.querySelector('.contacts__form');

form.addEventListener('submit', () => {
  inputs.forEach((input) => {
    if (input.value.trim() !== '') {
      input.classList.add('touched');
    }
  });
});

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    window.alert('Please fill in all fields of the form.');

    return;
  }

  if (!validateEmail(email)) {
    window.alert('Please enter a valid email address.');

    return;
  }

  this.submit();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);
}
