'use strict';
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.closest('#switches-house')) {
          document.querySelector('.to-house').classList.add('hidden-block'); 
          document.querySelector('.to-iptv').classList.add('hidden-block'); 
          document.querySelector('.tab-content-iptv').classList.add('hidden-block'); 
          document.querySelector('.tab-content-rates').classList.remove('hidden-block'); 
          document.querySelector('.int-only').classList.add('active'); 
          document.querySelector('.tv-int').classList.remove('active'); 
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
        if(e.target.closest('.city-button')) {
          document.querySelector('.city-block ').style.display = "block"; 
        }
        if(e.target.closest('.tv-int')) {
          document.querySelector('.to-iptv').classList.remove('hidden-block'); 
          document.querySelector('.tab-content-iptv').classList.remove('hidden-block'); 
          document.querySelector('.tab-content-rates').classList.add('hidden-block'); 
        }
        if(e.target.closest('.int-only')) {
          document.querySelector('.to-iptv').classList.add('hidden-block'); 
          document.querySelector('.tab-content-iptv').classList.add('hidden-block'); 
          document.querySelector('.tab-content-rates').classList.remove('hidden-block'); 
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

    var swiperbanner = new Swiper(".banner-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".banner-next",
        prevEl: ".banner-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
     
    var swiperrates = new Swiper(".rates-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".rates-next",
        prevEl: ".rates-prev",
      },
      breakpoints: {
        990: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });

    var swiperratesdop = new Swiper(".rates-dop-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".ratesdop-next",
        prevEl: ".ratesdop-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        }
      }
    });

    var swiperrcinemas = new Swiper(".cinemas-slider ", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".cinemas-next",
        prevEl: ".cinemas-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        }
      }
    });

    var swipercompany = new Swiper(".company-slider ", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".company-next",
        prevEl: ".company-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        }
      }
    });

    var swipercontacts = new Swiper(".contacts-slider ", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: ".contacts-next",
        prevEl: ".contacts-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });

  

});