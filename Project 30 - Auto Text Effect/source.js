let title = "Be like moon, chill and inspire people";
let speed = 1;

let titleEL = document.querySelector(".title");
let speedEl = document.querySelector("#speed");

animateText();

speedEl.addEventListener("change", () => {
  speed = speedEl.value;
  console.log(speed);
});

function animateText() {
  titleEL.innerHTML = "";
  for (let i = 0; i < title.length; i++) {
    setTimeout(() => {
      titleEL.innerHTML += title.charAt(i);
    }, i * (100 / speed));
  }

  setTimeout(animateText, title.length * (100 / speed) + 1000);
}
