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
