// Tip Calculator

let result = document.getElementsByClassName("total__result");

const calculateTip = () => {
  let bill = Number(document.getElementById("totalBill").value);
  let numOfPerson = Number(document.getElementById("numOfPerson").value);
  let tipPercentage = Number(document.getElementById("tipPercentage").value);

  let tip = bill * (tipPercentage / 100);
  let totalBill = bill + tip;
  let perPersonPay = totalBill / numOfPerson;

  document.getElementsByClassName(
    "calculator-tip__percent"
  )[0].innerHTML = `${tipPercentage}%`;
  document.getElementsByClassName(
    "calculator-tip__people"
  )[0].innerHTML = `${numOfPerson}`;

  let totalElements = document.getElementsByClassName("total__result");
  totalElements[0].innerHTML = `${tip.toFixed(2)}`;
  totalElements[1].innerHTML = `${totalBill.toFixed(2)}`;
  totalElements[2].innerHTML = `${perPersonPay.toFixed(2)}`;
};

// Calculator

//Function To Display Values On screen
function dis(value) {
  document.getElementsByClassName("calculator__screen")[0].value += value;
}

// Function For Evaluation
function solve() {
  let x = document.getElementsByClassName("calculator__screen")[0].value;
  let y = eval(x);
  document.getElementsByClassName("calculator__screen")[0].value = y;
}

//Function For clearing the screen
function clr() {
  document.getElementsByClassName("calculator__screen")[0].value = "";
}

//backspacing
function backspace() {
  let screen = document.getElementsByClassName("calculator__screen")[0].value;
  document.getElementsByClassName("calculator__screen")[0].value =
    screen.substring(0, screen.length - 1);
}

// Random quote generator

const generateQuote = () => {
  let url = "https://type.fit/api/quotes";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let randNum = Math.floor(Math.random() * 1500 + 1);
      let randomQuote = data[randNum];
      document.getElementsByClassName(
        "quote-gen__text"
      )[0].innerHTML = `"${randomQuote.text}"`;
      document.getElementsByClassName("quote-gen__author")[0].innerHTML = `- ${
        randomQuote.author ? randomQuote.author : ""
      }`;
    });
};

// Digital Clock

setInterval(showTime, 1000);

function showTime() {
  let date = new Date();
  let hour = date.getHours() % 12 || 12;
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}

// Slick slide

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
