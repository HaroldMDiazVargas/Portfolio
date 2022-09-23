// Slick slider

export function slickSlider() {
  $(".slider__top").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider__bottom",
  });
  $(".slider__bottom").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider__top",
    dots: true,
    // arrows: true,
    focusOnSelect: true,
  });

  $(".slider__action button[data-slide]").click(function (e) {
    e.preventDefault();
    let slide = $(this).data("slide");
    $(".slider__bottom").slick("slickGoTo", slide - 1);
  });
}
