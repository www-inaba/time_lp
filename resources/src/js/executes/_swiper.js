import "swiper/css/bundle";
import "swiper/css";
import Swiper from "swiper/bundle";
import $ from "jquery";
import Responsive from "../modules/_Responsive";

//Top
let mvSlider = new Swiper('[data-slider="mvSlider"]', {
  loop: true,
  allowTouchMove: false,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
});

let gallery = new Swiper('[data-slider="gallery"]', {
  speed: 8000,
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
    }
  },
});

let lineup = new Swiper('[data-slider="lineup"]', {
  slidesPerView: 1,
  spaceBetween: -60,
  loop: true,
  breakpoints: {
    769: {
      spaceBetween: 0,
    }
  },
  navigation: {
    nextEl: '[data-slider-button="lineup-button-next"]',
    prevEl: '[data-slider-button="lineup-button-prev"]',
  },
  pagination: {
    el: '[data-slider-pagination="lineup-pagination"]',
    type: 'fraction',
  }
});