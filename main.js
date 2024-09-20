import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints:{
    1400:{
      spaceBetween: 48,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200:{
      spaceBetween: 36,
      slidesPerView: 2,
      slidesPerGroup: 2,
      
    },
    767:{
      spaceBetween: 24,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  
  pagination: {
    el: ".swiper-pagination-num",
    type: "fraction",
  },
  
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});