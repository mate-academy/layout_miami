'use strict';

const toggleNav = () => {
  const toggleEls = document.getElementsByClassName('toggle');

  for (const elem of toggleEls) {
    elem.classList.toggle('non-visible');
  }
};

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 700, 'linear');
});
