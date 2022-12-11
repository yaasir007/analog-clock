const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

function setDate() {
  const time = new Date();
  const hourTime = time.getHours();
  const minTime = time.getMinutes();
  const secondTime = time.getSeconds();

  //turning hour, min and second into degree
  const hourDegree = (hourTime / 24) * 360 + 90;
  const minDegree = (minTime / 60) * 360 + 90;
  const secondDegree = (secondTime / 60) * 360 + 90;

  hour.style.transform = `rotate(${hourDegree}deg)`;
  hour.style.backgroundColor = "red";

  min.style.transform = `rotate(${minDegree}deg)`;
  min.style.backgroundColor = "blue";

  second.style.transform = `rotate(${secondDegree}deg)`;
  second.style.backgroundColor = "yellow";
}

setInterval(setDate, 1000);
