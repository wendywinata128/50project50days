let toggle = document.querySelector(".toggle");
let html = document.querySelector("html");
let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");
let timeEl = document.querySelector(".time");
let dateEl = document.querySelector(".date");

toggle.addEventListener("click", (e) => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) e.target.innerHTML = "light mode";
  else e.target.innerHTML = "dark mode";
});

function setUpClock() {
  let date = new Date();

  let hours = date.getHours() % 12;
  let hoursShow = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  secondEl.style.transform = `translate(-50%,-100%) rotate(${convertRangeNumberToAnotherNumber(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  hourEl.style.transform = `translate(-50%,-100%) rotate(${convertRangeNumberToAnotherNumber(
    hours,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%,-100%) rotate(${convertRangeNumberToAnotherNumber(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursShow}:${
    minute < 10 ? "0" : ""
  }${minute}:${second}`;
}

function convertRangeNumberToAnotherNumber(
  number,
  in_min,
  in_max,
  out_min,
  out_max
) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

setInterval(setUpClock, 1000);
