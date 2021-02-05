let layoutButton = document.querySelector(".layout-buttons");
let audios = Array.from(document.querySelectorAll(".audio"));

audios.forEach((item) => {
  let btn = document.createElement("BUTTON");
  btn.innerText = item.id;

  btn.addEventListener("click", () => {
    stopAnotherPlaySound();
    item.play();
  });

  layoutButton.appendChild(btn);
});

let stopAnotherPlaySound = () => {
  audios.forEach((item) => {
    item.pause();

    item.currentTime = 0;
  });
};
