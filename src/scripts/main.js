'use strict';

// input pattern

const formInputs = [
  'name',
  'phone',
  'email',
  'message',
  'contact_name',
  'contact_email',
];

for (const formInput of formInputs) {
  const input = document.getElementById(formInput);

  input.oninput = () => {
    if (input.value.charAt(0) === ' ') {
      input.value = '';
    }
  };
}
