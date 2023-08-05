'use strict';

document.getElementById('myForm').addEventListener('submit', formSubmit, false);

function formSubmit(event) {
  event.preventDefault();

  const formData = new FormData(this);
  let outputMessage = 'Form Data:\n';

  formData.forEach((value, key) => {
    outputMessage += `${key}: ${value}\n`;
  });

  console.log(outputMessage);
}
