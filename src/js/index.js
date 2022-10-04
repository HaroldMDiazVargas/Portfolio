import { DigitalClock } from "./apps/digitalClock";
import { NumCalculator } from "./apps/numCalculator";
import { GenerateQuote, displayQuote } from "./apps/randomQuote";
import { TipCalculator } from "./apps/tipCalculator";
import { eventHandler, isElementInViewport } from "./eventHandler";
import { GenerateQr } from "./apps/qrCode";
import { TodoList } from "./apps/todoList";
import AOS from "aos";

import(
  /* webpackChunkName: "audioplayer" */ /* webpackPrefetch: true */ "./apps/audioPlayer"
);

import "./../css/normalize.css";
import "./../css/styles.css";
import "./../css/appStyles.css";
// import "./../css/slick.min.css";
// import "./../css/slick-theme.min.css";
import "aos/dist/aos.css";

const slider = document.querySelector(".slider");
const showImages = () => {
  if (isElementInViewport(slider))
    import(
      /* webpackChunkName: "slickSlider" */
      /* webpackPrefetch: true */
      "./apps/slickSlider"
    );
};
window.addEventListener("scroll", showImages);

AOS.init();
const calculator = new NumCalculator();
const quotes = new GenerateQuote("https://type.fit/api/quotes");
const tipCalculator = new TipCalculator();
const qrCode = new GenerateQr(".qr__text", ".qr__alert", " .qr__image");
const todoList = new TodoList();
setInterval(DigitalClock.showTime, 1000);

eventHandler(".collapsible", "click", function () {
  this.classList.toggle("collapsible--expanded");
});

eventHandler(".calculator__btn-ch", "click", function () {
  calculator.dis(this);
});

eventHandler(".calculator__btn-eq", "click", function () {
  calculator.solve();
});

eventHandler(".calculator__btn-clr", "click", function () {
  calculator.clr();
});

eventHandler(".calculator__btn-del", "click", function () {
  calculator.backspace();
});

eventHandler(".quote-gen__btn", "click", function () {
  displayQuote(quotes, ".quote-gen__text", ".quote-gen__author");
});

eventHandler("#totalBill", "input", function () {
  tipCalculator.result();
});

eventHandler("#tipPercentage, #numOfPerson", "change", function () {
  tipCalculator.result();
});

// eventHandler(".prev-track", "click", function () {
//   audioPlayer.prevTrack();
// });

// eventHandler(".playpause-track", "click", function () {
//   audioPlayer.playPauseTrack();
// });

// eventHandler(".next-track", "click", function () {
//   audioPlayer.nextTrack();
// });

// eventHandler(".seek_slider", "change", function () {
//   audioPlayer.seekTo();
// });

// eventHandler(".volume_slider", "change", function () {
//   audioPlayer.setVolume();
// });

eventHandler(".qr__btn", "click", function () {
  qrCode.displayQr();
});

eventHandler(".board__item", "dragstart", function (event) {
  todoList.dragStart(event);
});

eventHandler(".board__item", "dragend", function (event) {
  todoList.dragEnd(event);
});

eventHandler(".board__column", "dragenter", function (event) {
  todoList.dragEnter(event);
});

eventHandler(".board__column", "dragleave", function (event) {
  todoList.dragLeave(event);
});

eventHandler(".board__column", "drop", function (event) {
  todoList.drop(event);
});

eventHandler(".board__column", "dragover", function (event) {
  todoList.allowDrop(event);
});
