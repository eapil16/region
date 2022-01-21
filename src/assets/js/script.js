'use strict';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.closest('#switches-house')) {
          document.querySelector('.to-house').classList.add('hidden-block'); 
        }
        if (e.target.closest('#switches-apartment')) {
            document.querySelector('.to-house').classList.remove('hidden-block'); 
          }
        
    });

    var swiper = new Swiper(".equipment-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".equipment-next",
        prevEl: ".equipment-prev",
      },
    });

    var swiper = new Swiper(".services-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".services-next",
        prevEl: ".services-prev",
      },
    });
    
    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      $('body,html').animate({
         scrollTop: 0
       }, 0);
       return false;        
    });



});