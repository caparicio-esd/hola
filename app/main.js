import "./../assets/sass/main.scss"
import Swiper from 'swiper';
import Aos from 'aos';

Aos.init();

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});