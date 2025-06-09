import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

function getSlidesPerView() {
  if (window.innerWidth >= 1366) {
    return 4;
  } else if (window.innerWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

function createSwiper() {
  return new Swiper('.swiper--juri', {
    loop: true,
    slidesPerView: getSlidesPerView(),
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        // spaceBetween: 40
      },
      1366: {
        slidesPerView: 4
      },
    },
  });
}

let swiper = createSwiper();

window.addEventListener('resize', () => {
  swiper.destroy(true, true);
  swiper = createSwiper();
});
