import Swiper from 'swiper/js/swiper.min.js';

var arWorkSwiper = [];
$('.js-swiper--work').each(function (index) {
  var $el = $(this),
    $elPag = $el.find('.swiper-pagination--work'),
    $elNavLeft = $el.siblings('.swiper-controls').find('.swiper-button-next--work'),
    $elNavRight = $el.siblings('.swiper-controls').find('.swiper-button-prev--work'),
    $elFraction = $el.find('.swiper-fraction--work'),
    extraOptions = $el.data('slider-options') || {};


  $el.addClass(`js-swiper--work-${index}`);
  $elPag.addClass(`swiper-pagination--work-${index}`);
  $elNavLeft.addClass(`swiper-button-next--work-${index}`);
  $elNavRight.addClass(`swiper-button-prev--work-${index}`);
  $elFraction.addClass(`swiper-fraction--work-${index}`);

  arWorkSwiper[index] = new Swiper(`.js-swiper--work-${index}`, {
    lazy: true,
    spaceBetween: 3,
    loop: false,
    slidesPerView: 4,
    speed: 900,
    autoHeight: true,
    simulateTouch: false,
    init: false,
    mousewheel: false,
    pagination: {
      el: `.swiper-pagination--work-${index}`,
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: `.swiper-button-next--work-${index}`,
      prevEl: `.swiper-button-prev--work-${index}`,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      420: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 4
      }
    },
    ...extraOptions,
  });


  arWorkSwiper[index].init();
});
