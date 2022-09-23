// Calculator
const screen = document.querySelector(".calculator__screen");
export class NumCalculator {
  constructor() {
    // this.screen = document.querySelector(".calculator__screen").value;

    this.dis = function (btn) {
      screen.value += btn.value;
    };

    this.solve = function () {
      screen.value = eval(screen.value);
    };

    this.clr = function () {
      screen.value = "";
    };

    this.backspace = function () {
      screen.value = screen.value.substring(0, screen.value.length - 1);
    };
  }
}
