const clock = document.querySelector("#clock");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getClock() {
  const date = new Date();

  const years = date.getFullYear();
  const month = months[date.getMonth()];
  const dates = date.getDate();
  const day = days[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${years} ${month}${dates}, ${day} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
