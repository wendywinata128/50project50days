let textArea = document.querySelector("textarea");
let tags = document.querySelector(".tags");

let randomTest = document.querySelector(".random-test");

function startRandomTest() {
  randomTest.style.visibility = "visible";

  randomTest.addEventListener("click", (e) => {
    if (e.target === randomTest) {
      randomTest.style.visibility = "hidden";
    }
  });

  let randomPicker = document.querySelector(".picker");

  let value = textArea.value.split(",");

  let interval = setInterval(() => {
    let item = value[Math.floor(Math.random() * value.length)];
    randomPicker.innerHTML = item;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
  }, 300 * value.length);
}

textArea.addEventListener("keyup", (e) => {
  makeTag(e.target.value);

  if (e.key == "Enter") {
    startRandom();

    textArea.value = textArea.value.replace(/[\r\n]+/gm, "");
  }
});

let makeTag = (keyword) => {
  tags.innerHTML = "";
  keyword
    .split(",")
    .filter((item) => item.trim())
    .forEach((item) => {
      let tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerHTML = item;
      tags.appendChild(tag);
    });
};

let startRandom = () => {
  let tag = document.querySelectorAll(".tag");
  let random = 0;

  let interval = setInterval(() => {
    random = Math.floor(Math.random() * tag.length);
    tag[random].classList.add("highlight");

    removeHightlight(tag[random], interval);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      tag[random].classList.add("highlight");
    }, 100);
  }, 3000);
};

let removeHightlight = (item, interval) => {
  setTimeout(() => {
    item.classList.remove("highlight");
  }, 100);
};
