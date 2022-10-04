// Slick slider
import { Images } from "../images";

const images = new Images("/assets/images/webp/carousel/", ".slider__content");
images.lazyLoad();

$(document).ready(function () {
  $(".slider__top").slick({
    // lazyLoad: "ondemand",
    // lazyLoad: "progressive",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    // asNavFor: ".slider__bottom",
  });
  $(".slider__bottom").slick({
    // lazyLoad: "progressive",
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider__top",
    // dots: true,
    arrows: true,
    focusOnSelect: true,
  });

  $(".slider__action button[data-slide]").click(function (e) {
    e.preventDefault();
    let slide = $(this).data("slide");
    $(".slider__bottom").slick("slickGoTo", slide - 1);
  });
});
