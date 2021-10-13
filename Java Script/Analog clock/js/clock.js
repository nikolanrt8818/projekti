const hour = document.querySelector(".hand-hour");
const minute = document.querySelector(".hand-minute");
const second = document.querySelector(".hand-seconds");
const tick = new Audio("audio/tick.mp3")

setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
  tick.play()
  tick.volume = 0.2
}, 1000);
