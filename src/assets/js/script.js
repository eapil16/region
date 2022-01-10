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
  

});