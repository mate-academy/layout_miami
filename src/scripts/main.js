'use strict';
/* global $ */

const btnDown = document.getElementsByClassName('nav__icon');
const par = document.getElementsByClassName('nav__menu');
const closeMenuCross = document.getElementById('close-m-cross');
const closeMenuHome = document.getElementById('close-m-home');
const closeMenuAbout = document.getElementById('close-m-about');
const closeMenuGallery = document.getElementById('close-m-gallery');
const closeMenuTestimonials = document.getElementById('close-m-testimonials');
const closeMenuContacts = document.getElementById('close-m-contacts');

btnDown[0].onclick = function() {
  par[0].classList.add('nav__menu--active');
};

closeMenuCross.onclick = function() {
  par[0].classList.remove('nav__menu--active');
};

closeMenuAbout.onclick = function() {
  par[0].classList.remove('nav__menu--active');
};

closeMenuGallery.onclick = function() {
  par[0].classList.remove('nav__menu--active');
};

closeMenuTestimonials.onclick = function() {
  par[0].classList.remove('nav__menu--active');
};

closeMenuContacts.onclick = function() {
  par[0].classList.remove('nav__menu--active');
};

closeMenuHome.onclick = function() {
  par[0].classList.remove('nav__menu--active');
};

$('#form').submit(function(e) {
  e.preventDefault();

  $.ajax({
    success: function() {
      document.getElementById('form').reset();
      document.getElementById('send-mail').innerHTML = 'Message send!';
    },
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
