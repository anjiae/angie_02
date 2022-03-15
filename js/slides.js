'use strict';
document.addEventListener('DOMContentLoaded', function () {
  // front-page slide for Articles
  var swiper = new Swiper(".articleSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }

  });

  // Event-page slide
  var swiper = new Swiper(".eventSwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  });
});