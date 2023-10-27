'use strict';

function openModal(event) {
  event.preventDefault(); // Prevent default behavior of the click event

  const modal = document.querySelector('.modal');

  modal.style.display = 'block';
}

// Attach click event listener to the burger icon to open the modal
document.querySelector('.header__icon--burger')
  .addEventListener('click', openModal);

function closeModal() {
  const modal = document.querySelector('.modal');

  modal.style.display = 'none';
}

// Attach click event listener to the close icon in the modal
document.querySelector('.modal__close')
  .addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the click event
    closeModal(); // Call the closeModal function
  });
