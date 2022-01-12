'use strict';

document.getElementById('nav-menu').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'hidden';
});

document.getElementById('nav-click').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('sent').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
  }
);
