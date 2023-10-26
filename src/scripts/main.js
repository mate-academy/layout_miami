'use strict';

// Function to open the modal
function openModal(event) {
  event.preventDefault(); // Prevent default behavior of the click event

  const modal = document.querySelector('.modal');

  modal.style.display = 'block'; // Set modal display to 'block'
}

// Attach click event listener to the burger icon to open the modal
document.querySelector('.header__icon--burger')
  .addEventListener('click', openModal);

// Function to close the modal
function closeModal() {
  const modal = document.querySelector('.modal'); // Select the modal element

  modal.style.display = 'none'; // Set modal display to 'none'
}

// Attach click event listener to the close icon in the modal
document.querySelector('.modal__close')
  .addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the click event
    closeModal(); // Call the closeModal function
  });
