(function ($) {
  "use strict";

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".tp-swiper-button-next",
      prevEl: ".tp-swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper(".myBrandSwiper", {
    slidesPerView: 'auto',
    freedome:true,
    allowTouchMove: false,
    spaceBetween: 50,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 1,
      disableOnIteraction: true,
    },
  });
})(jQuery);
