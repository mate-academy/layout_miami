'use strict';

const scrollUp = document.querySelector('.scroll-up');
const form = document.querySelector('.form');
const formField = document.querySelectorAll('.form__field');
const button = document.querySelector('.form__button');
const borderGreen = '2px solid #62e662';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20
    || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
}

formField.forEach(function(element) {
  form.addEventListener('submit', function(event) {
    element.style.border = borderGreen;
    button.style.border = borderGreen;
    button.textContent = 'SENT ✅';
    button.style.fontsize = '2rem';
    event.preventDefault();
  });
});
