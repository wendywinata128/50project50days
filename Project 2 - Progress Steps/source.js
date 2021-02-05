//0 next, 1 previous
let btn = document.querySelectorAll(".btn");
let progress = document.querySelector(".progress");
let circle = document.querySelectorAll(".circle");

let currentActive = 1;

btn[0].addEventListener("click", () => {
  if (currentActive == circle.length) {
    return;
  }

  currentActive++;
  updateProgress();
  circle[currentActive - 1].classList.add("active");
});

btn[1].addEventListener("click", () => {
  if (currentActive == 1) {
    return;
  }

  currentActive--;
  updateProgress();
  circle[currentActive].classList.remove("active");
});

let updateProgress = () => {
  let percent = ((currentActive - 1) / (circle.length - 1)) * 100;
  progress.style.width = percent + "%";
};
