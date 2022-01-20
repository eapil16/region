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
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  

});