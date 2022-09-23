// Digital Clock

export class DigitalClock {
  constructor() {
    this.date = new Date();
    this.hour = this.date.getHours() % 12 || 12;
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
  }

  static showTime() {
    this.date = new Date();
    this.hour = this.date.getHours() % 12 || 12;
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();

    if (this.hour < 10) {
      this.hour = "0" + this.hour;
    }
    if (this.minutes < 10) {
      this.minutes = "0" + this.minutes;
    }
    if (this.seconds < 10) {
      this.seconds = "0" + this.seconds;
    }

    document.getElementById("hour").innerHTML = this.hour;
    document.getElementById("minute").innerHTML = this.minutes;
    document.getElementById("sec").innerHTML = this.seconds;
  }
}

// setInterval(digitalClock.showTime, 1000);
