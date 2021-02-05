let number = document.querySelectorAll(".number");
let countdown = document.querySelector(".countdown");
let final = document.querySelector(".final");
let btnReplay = document.querySelector("button");

btnReplay.addEventListener("click", resetAnimation);

startAnimation();

function startAnimation() {
  number[0].classList.add("in");

  number.forEach((item, idx) => {
    item.addEventListener("animationend", (e) => {
      if (e.animationName === "in" && idx !== number.length - 1) {
        item.classList.remove("in");
        item.classList.add("out");
      } else if (e.animationName === "out") {
        item.nextElementSibling.classList.add("in");
      } else {
        countdown.className = "countdown hide";
        final.className = "final show";
      }
    });
  });
}

function resetAnimation() {
  countdown.className = "countdown show";
  final.className = "final hide";

  number.forEach((item) => {
    item.className = "number";
  });

  startAnimation();
}
