'use strict';

document.getElementById('sent').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
  }
);

document.getElementById('nav-menu').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'hidden';
});

document.getElementById('nav-click').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('home-link').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('about-link').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('gallery-link').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('testi-link').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('contact-link').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});

document.getElementById('logo-click').addEventListener('click', function() {
  document.getElementById('html-gen').style.overflow = 'visible';
});
