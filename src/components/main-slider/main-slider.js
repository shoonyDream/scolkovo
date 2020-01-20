import Swiper from 'swiper/js/swiper.min.js';

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  effect: 'fade',
  thumbs: {
    swiper: galleryThumbs
  }
});

galleryTop.on('slideChangeTransitionStart', function () {
  $('.gallery-text__item').removeClass('is-active');
  $('.gallery-text__item')
        .eq(galleryTop.activeIndex)
        .addClass('is-active');
});