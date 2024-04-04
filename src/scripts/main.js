'use strict';
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* // Function to open the menu
function openMenu() {
  const body = document.body;
  const menu = document.querySelector('menu');

  // Add class to body to disable scrolling
  body.classList.add('menu');
  // Slide in the menu
  menu.style.transform = 'translateX(0)';
}

// Function to close the menu
function closeMenu() {
  const body = document.body;
  const menu = document.querySelector('menu');

  // Remove class from body to enable scrolling
  body.classList.remove('.menu');
  // Slide out the menu
  menu.style.transform = 'translateX(100%)';
}

// Toggle menu open/close
function toggleMenu() {
  const body = document.body;
  const menu = document.querySelector('.menu');

  // If menu is closed, open it
  if (!body.classList.contains('#menu')) {
    openMenu();
  } else { // If menu is open, close it
    closeMenu();
  }
}

// Event listener to toggle menu when a button is clicked
document.getElementById('close').addEventListener('click', toggleMenu); */



function emptyName() {
  var x;
  x = document.getElementById("name").value;
  if (x == "") {
    alert("Enter a Valid Name");
    return false;
  };
}

function emptyEmail() {
  var x;
  x = document.getElementById("email").value;
  if (x == "") {
    alert("Enter a Valid email");
    return false;
  };
}
