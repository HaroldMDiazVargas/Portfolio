// Generate QR

export class GenerateQr {
  constructor(textSelector, alertSelector, imageSelector) {
    this.qrTextInput = document.querySelector(textSelector);
    this.alertElement = document.querySelector(alertSelector);
    this.qrImage = document.querySelector(imageSelector);
  }

  isValid() {
    return this.qrTextInput.checkValidity();
  }

  displayQr() {
    if (!this.isValid()) {
      this.alertElement.innerHTML = this.qrTextInput.validationMessage;
      this.qrImage.classList.add("hidden");
    } else {
      this.alertElement.innerHTML = "";
      this.qrImage.classList.remove("hidden");
      this.qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" +
        this.qrTextInput.value;
    }
  }
}
