let container = document.querySelector(".container");
const rows = 20;

const SOURCE_URL = "https://source.unsplash.com/random/";

makeContent();

function makeContent() {
  for (let i = 0; i < rows * 3; ++i) {
    let img = document.createElement("img");
    img.src = SOURCE_URL + getRandomSize();
    container.appendChild(img);
  }
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
