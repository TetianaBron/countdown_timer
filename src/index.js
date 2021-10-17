import './sass/main.scss';

const refs = {
  datetime: document.querySelector('#datetime'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  timeIsOver: document.querySelector('.timeIsOver'),
};

//Finding time now in format for min-attribute in input
function getTodayData() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // Месяца идут с 0, так что добавляем 1.
  const yyyy = today.getFullYear();
  let minutes = today.getMinutes();
  let hour = today.getHours();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  today = yyyy + '-' + mm + '-' + dd + 'T' + hour + ':' + minutes;
  return today;
}

// console.log(today);

refs.datetime.setAttribute('min', getTodayData());

class CountdownTimer {
  constructor({ onTick, onTimeIsOver }) {
    this.intervalId = null;
    this.targetDate = null;
    this.onTick = onTick;
    this.onTimeIsOver = onTimeIsOver;

    this.init();
  }
  get data() {
    return this.targetDate;
  }
  set data(datetime) {
    this.targetDate = datetime;
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    this.intervalId = setInterval(() => {
      //Plus 3 hours - Ukraine's time zone
      const currentTime = Date.now() + 3 * 1000 * 60 * 60;
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      if (time.days < 1 && time.hours < 1 && time.mins < 1 && time.secs < 1) {
        clearInterval(this.intervalId);
        this.init();
        this.onTimeIsOver();
      } else {
        this.onTick(time);
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.init();
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  onTick: updateClockface,
  onTimeIsOver: addStringTimeIsOver,
});

refs.datetime.addEventListener('input', handleOnInput);

function handleOnInput(e) {
  if (e.target.value) {
    countdownTimer.data = e.target.valueAsNumber;
    countdownTimer.start();
  } else {
    countdownTimer.data = null;
    countdownTimer.stop();
  }
}

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function addStringTimeIsOver() {
  refs.timeIsOver.textContent = 'Congrats! Time is over!';
}