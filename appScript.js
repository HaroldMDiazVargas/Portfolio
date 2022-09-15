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
