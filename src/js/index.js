import { DigitalClock } from "./apps/digitalClock";
import { NumCalculator } from "./apps/numCalculator";
import { GenerateQuote, displayQuote } from "./apps/randomQuote";
import { TipCalculator } from "./apps/tipCalculator";
import { eventHandler } from "./eventHandler";
import { slickSlider } from "./apps/slickSlider";
import { AudioPlayer } from "./apps/audioPlayer";
import { GenerateQr } from "./apps/qrCode";
import { TodoList } from "./apps/todoList";
import AOS from "aos";

import "./../css/normalize.css";
import "./../css/styles.css";
import "./../css/appStyles.css";
import "./../css/slick.min.css";
import "./../css/slick-theme.min.css";
import "aos/dist/aos.css";

AOS.init();
let track_list = [
  {
    name: "Ukelele", //ukelele
    artist: "Violett",
    image:
      "https://freemusicarchive.org/image/?file=images%2Falbums%2FVarious_Artists_-_Aires_Buenos_-_2009113014203475.jpg&width=290&height=290&type=image",
    path: "https://files.freemusicarchive.org//storage-freemusicarchive-org//music//no_curator//violett//Aires_Buenos//violett_-_04_-_ukelele_seph_remix.mp3",
  },
  {
    name: "Equation",
    artist: "The hermit",
    image:
      "https://freemusicarchive.org/image/?file=track_image%2FRsh7OEv17bMsBhJZx3HZiLr1O4dxRxf4nBOzmtww.jpeg&width=290&height=290&type=track",
    path: "https://files.freemusicarchive.org//storage-freemusicarchive-org//tracks//52XGYrH1sFstSczS6T52mpAN4xP2Bg0Ig9A4W2S5.mp3",
  },
  {
    name: "Flat Blue Acid",
    artist: "Simon Mathewson",
    image:
      "https://freemusicarchive.org/image/?file=image%2Fz392j03jzX54ASsJi3Ywig71W3k6fR7jSTX0BbHM.jpeg&width=290&height=290&type=image",
    path: "https://files.freemusicarchive.org//storage-freemusicarchive-org//tracks//ggBEwSSzoiiBNwSCrmn49MzfB7NuMloebARGSsGj.mp3",
  },
];

const calculator = new NumCalculator();
const quotes = new GenerateQuote("https://type.fit/api/quotes");
const tipCalculator = new TipCalculator();
const audioPlayer = new AudioPlayer(track_list);
const qrCode = new GenerateQr(".qr__text", ".qr__alert", " .qr__image");
const todoList = new TodoList();
audioPlayer.loadTrack();
setInterval(DigitalClock.showTime, 1000);
slickSlider();

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

eventHandler(".prev-track", "click", function () {
  audioPlayer.prevTrack();
});

eventHandler(".playpause-track", "click", function () {
  audioPlayer.playPauseTrack();
});

eventHandler(".next-track", "click", function () {
  audioPlayer.nextTrack();
});

eventHandler(".seek_slider", "change", function () {
  audioPlayer.seekTo();
});

eventHandler(".volume_slider", "change", function () {
  audioPlayer.setVolume();
});

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
