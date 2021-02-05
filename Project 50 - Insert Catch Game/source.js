let btnPlayGame = document.querySelector("#btn-play-game");
let insectEl = document.querySelectorAll(".insect");
let body = document.querySelector("body");

let insects = {
  Fly: "http://pngimg.com/uploads/fly/fly_PNG3946.png",
  Mosquito: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  Spider: "http://pngimg.com/uploads/spider/spider_PNG12.png",
  Roach: "http://pngimg.com/uploads/roach/roach_PNG12163.png",
};

let insectChoosed = "Mosquito";
let score = 0;

btnPlayGame.addEventListener("click", () => {
  body.style.transform = `translateY(-100vh)`;
});

insectEl.forEach((item) => {
  item.addEventListener("click", () => {
    insectChoosed = item.innerText;
    body.style.transform = `translateY(-200vh)`;
    startGame();
  });
});

function startGame() {
  setTime();
  setGame();
  setScore();
}

function setScore() {
  let targetEl = document.querySelector(".score");
  targetEl.innerText = `Score : ${score}`;
}

function setTime() {
  let minute = 0;
  let second = 0;

  let time = document.querySelector(".time");

  time.innerText = `Time : ${minute
    .toString()
    .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;

  setInterval(() => {
    second++;

    if (second === 60) {
      minute++;
      second = 0;
    }

    time.innerText = `Time : ${minute
      .toString()
      .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
  }, 1000);
}

function setGame() {
  makeRandomInsect();
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function makeRandomInsect() {
  let containerGame = document.querySelector(".game");
  let insect = document.createElement("img");
  insect.classList.add("target");

  insect.src = insects[insectChoosed];
  containerGame.appendChild(insect);

  let maxHeight = containerGame.offsetHeight - 120;
  let maxWidth = containerGame.offsetWidth - 140;

  insect.style.top = `${randomNumber(maxHeight)}px`;
  insect.style.left = `${randomNumber(maxWidth)}px`;

  insect.addEventListener("click", () => {
    insect.remove();
    score++;
    setScore();

    setTimeout(makeRandomInsect, 1000);
    setTimeout(makeRandomInsect, 1500);
  });
}
