document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('https://example.com/submit-form', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      window.alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      window.alert('There was an error submitting the form.');
    });
});
