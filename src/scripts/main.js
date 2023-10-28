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

document.getElementById('resetForm').addEventListener('click', function() {
  document.getElementById('contact__form').reset();
});

const modalLinks = document.querySelectorAll('.modal .modal__anchor');

modalLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Close the modal
    const modal = document.querySelector('.modal');

    modal.style.display = 'none';

    // Get the text inside the clicked link to determine the target section
    const targetSectionText = this.textContent.trim().toLowerCase()
      .replace(' ', '-');

    // Scroll smoothly to the target section based on the link text
    const targetSection = document.getElementById(targetSectionText);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
