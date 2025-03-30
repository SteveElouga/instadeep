const swiperEl = document.querySelector("swiper-container");
const buttonPrev = document.getElementById('custom-prev');
const buttonNext = document.getElementById('custom-next');

buttonPrev.addEventListener('click', () => {
  swiperEl.swiper.slidePrev();
});

buttonNext.addEventListener('click', () => {
  swiperEl.swiper.slideNext();
});

// Breakpoint customization
Object.assign(swiperEl, {
  // spaceBetween: 0,
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    860: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
swiperEl.initialize();



