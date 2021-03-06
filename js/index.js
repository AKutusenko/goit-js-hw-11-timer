const refs = {
  days: document.querySelector('[data-value = "days"]'),
  hours: document.querySelector('[data-value = "hours"]'),
  mins: document.querySelector('[data-value = "mins"]'),
  secs: document.querySelector('[data-value = "secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = Date.parse(targetDate);
    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      let time = this.targetDate - currentTime;
      this.updateClockFace(this.getTimeComponents(time));
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  updateClockFace({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}:`;
    refs.hours.textContent = `${hours}:`;
    refs.mins.textContent = `${mins}:`;
    refs.secs.textContent = secs;
  }
}

const timer = new CountdownTimer("#Timer-1", "Jan 1, 2022");
