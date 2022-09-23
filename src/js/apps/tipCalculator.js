// Tip Calculator

// let result = document.getElementsByClassName("total__result");

export class TipCalculator {
  constructor() {
    this.result = function () {
      let bill = Number(document.querySelector("#totalBill").value);
      let numOfPerson = Number(document.querySelector("#numOfPerson").value);
      let tipPercentage = Number(
        document.querySelector("#tipPercentage").value
      );

      let spanPercentage = document.querySelector(".calculator-tip__percent");
      spanPercentage.innerHTML = `${tipPercentage}%`;

      let spanPerson = document.querySelector(".calculator-tip__people");
      spanPerson.innerHTML = `${numOfPerson}`;

      let totalElements = document.querySelectorAll(".total__result");

      let tip = bill * (tipPercentage / 100);
      let totalBill = bill + tip;
      let perPersonPay = totalBill / numOfPerson;

      totalElements[0].innerHTML = `${tip.toFixed(2)}`;
      totalElements[1].innerHTML = `${totalBill.toFixed(2)}`;
      totalElements[2].innerHTML = `${perPersonPay.toFixed(2)}`;
    };
  }
}

// export const calculateTip = () => {
//   let tip = bill * (tipPercentage / 100);
//   let totalBill = bill + tip;
//   let perPersonPay = totalBill / numOfPerson;

//   document.getElementsByClassName(
//     "calculator-tip__percent"
//   )[0].innerHTML = `${tipPercentage}%`;
//   document.getElementsByClassName(
//     "calculator-tip__people"
//   )[0].innerHTML = `${numOfPerson}`;

//   let totalElements = document.getElementsByClassName("total__result");
//   totalElements[0].innerHTML = `${tip.toFixed(2)}`;
//   totalElements[1].innerHTML = `${totalBill.toFixed(2)}`;
//   totalElements[2].innerHTML = `${perPersonPay.toFixed(2)}`;
// };
