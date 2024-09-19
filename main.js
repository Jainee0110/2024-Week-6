import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  //一次呈現幾張
  slidesPerView: 2,
  //一個群組內有幾張投影片
  slidesPerGroup: 2,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination-num",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});