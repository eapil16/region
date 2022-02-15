'use strict';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.closest('#switches-house')) {
          document.querySelector('.to-house').classList.add('hidden-block'); 
        }
        if (e.target.closest('#switches-apartment')) {
            document.querySelector('.to-house').classList.remove('hidden-block'); 
        }
        if(e.target.closest('#city-close')) {
          document.querySelector('.city-block ').classList.add('hidden-block'); 
        }
        if(e.target.closest('.city-button')) {
          document.querySelector('.city-block ').classList.remove('hidden-block'); 
        }
    });

    var swiper = new Swiper(".equipment-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".equipment-next",
        prevEl: ".equipment-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      }
    });

    var swiper = new Swiper(".services-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".services-next",
        prevEl: ".services-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
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

    let $i = 0; 
    $('.menu-toggle-cont').click(function () { 
      $('.search-hidden').slideUp();
      if ($i == 0) { 
        $(this).addClass('menu-toggle-cont_active'); 
        $('.fixed-menu').slideDown('fast'); 
        $('body').addClass('hidd'); 
        $i = 1; 
      } else { 
        $(this).removeClass('menu-toggle-cont_active'); 
        $('.fixed-menu').slideUp('fast'); 
        $i = 0; 
        $('body').removeClass('hidd'); 
      } 
    });
  

});