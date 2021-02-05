let loveImg = document.querySelector(".loveMe");
let clickEl = document.querySelector(".click");

let click = 0;
let first_click = false;
let double_click = false;

let time_click = 0;

loveImg.addEventListener("click", (e) => {
  let date = new Date();

  if (time_click === 0) {
    time_click = date.getTime();
  } else {
    if (date.getTime() - time_click < 800) {
      dblClick(e);
      time_click = 0;
    } else {
      time_click = date.getTime();
    }
  }

  //Cara 2
  // if (first_click) {
  //   double_click = true;
  // }

  // first_click = true;

  // setTimeout(() => {
  //   if (double_click) {
  //     dblClick(e);
  //   }
  //   first_click = false;
  //   double_click = false;
  // }, 300);
});

function dblClick(e) {
  click++;

  clickEl.innerText = click;

  let heart = document.createElement("div");
  heart.className = "fas fa-heart";

  heart.style.left = `${e.clientX - e.target.offsetLeft}px`;
  heart.style.top = `${e.clientY - e.target.offsetTop}px`;

  loveImg.appendChild(heart);

  setTimeout(() => heart.remove(), 500);
}
