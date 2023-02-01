var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 20000,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
