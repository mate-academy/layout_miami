'use strict';

let parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
  parent = jQuery('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
  child = parent.children();
  scrollWidth = child.innerWidth() - child.height(99).innerWidth();
  parent.remove();
}

if (($('body').width() + scrollWidth) > 767) {
  smoothyScrollMenu();
  waypointMenu();
} else {
  menuBtnClick();
  closeMenu();
}

function waypointMenu() {
  var navli = $(".nav .nav__link");
  $('.waypoint-section').waypoint(function () {
    var hash =  $(this.element).attr('id');
    navli.removeClass('nav__link-active');
    $.each(navli, function () {
        if ( $(this).attr('href').slice(1) == hash) {
            $(this).addClass('nav__link-active');
        }
    });
  })
}

function smoothyScrollMenu() {
  $('.nav .nav__link').click(function() {
      var the_id = $(this).attr("href");
      $('html, body').animate({
          scrollTop:$(the_id).offset().top
      }, 400);
  });
}

function closeMenu() {
  $('.nav__link').click(function(){
    $('.header').removeClass('menu-open');
  })
}

function menuBtnClick() {
  $('.menu-btn').click(function(){
    if($('.header').hasClass('menu-open')) {
      $('.header').removeClass('menu-open');
    } else {
      $('.header').addClass('menu-open');
    }
  })
}


