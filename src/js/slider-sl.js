// $('.slider__1').slick();
$('.slider__1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.sl2__list',
  infinite: true,
  prevArrow: '<button class="prev button-slide"></button>', //absolute
  nextArrow: '<button class="next button-slide"></button>', //absolute
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1278,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 3000,
      settings: {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
      },
    },
  ],
});

$('.sl2__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider__1',
  dots: false,
  infinite: true,
  focusOnSelect: true,
  autoplaySpeed: 2000,

  arrows: true,
  appendArrows: '.slider__2', //relative
  prevArrow: '<button class="prev button-slide"></button>', //absolute
  nextArrow: '<button class="next button-slide"></button>', //absolute
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1278,
      settings: {
        arrows: true,
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 3000,
      settings: {
        arrows: false,
        slidesToShow: 6,
        infinite: true,
      },
    },
  ],
});
