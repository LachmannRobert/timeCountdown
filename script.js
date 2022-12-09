const days = document.querySelector('.days span');
const hours = document.querySelector('.hours span');
const minutes = document.querySelector('.minutes span');
const seconds = document.querySelector('.seconds span');
let year = new Date().getFullYear();

const timeCounter = () => {
  const startCount = new Date().getTime();
  const endCount = new Date(`${year+1}-01-01 00:00:00`).getTime();
  const remainingCount = Math.floor((endCount-startCount)/1000);

  const remainingDays = remainingCount/86400;
  const remainingHours = (remainingCount/3600)%24;
  const remainingMinutes = (remainingCount/60)%60;
  const remainingSeconds = remainingCount%60;

  days.textContent = Math.floor(remainingDays) < 10 ? '0'+Math.floor(remainingDays) : Math.floor(remainingDays);
  hours.textContent = Math.floor(remainingHours) < 10 ? '0'+Math.floor(remainingHours) : Math.floor(remainingHours);
  minutes.textContent = Math.floor(remainingMinutes) < 10 ? '0'+Math.floor(remainingMinutes) : Math.floor(remainingMinutes);
  seconds.textContent = Math.floor(remainingSeconds) < 10 ? '0'+Math.floor(remainingSeconds) : Math.floor(remainingSeconds);
};

setInterval(timeCounter, 1000);