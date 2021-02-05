let container = document.querySelector(".container");
let btnUp = document.querySelector(".btn.up");
let btnDown = document.querySelector(".btn.down");
let slideLeft = document.querySelector(".left-slide");
let slideRight = document.querySelector(".right-slide");

let slideLength = document.querySelectorAll(".info").length - 1;

let currentActive = 0;

//cara1
slideRight.style.transform = `translateY(-${slideLength * 100}vh)`;

//cara 2
// slideRight.style.top = `-${100 * slideLength}vh`;

setButton();

function setButton() {
  let containerHeight = container.offsetHeight;

  btnUp.addEventListener("click", () => {
    currentActive++;
    if (currentActive > 3) currentActive = 0;

    updateSlide(containerHeight);
  });

  btnDown.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 0) currentActive = slideLength;

    updateSlide(containerHeight);
  });
}

function updateSlide(containerHeight) {
  slideLeft.style.transform = `translateY(-${
    containerHeight * currentActive
  }px)`;

  //cara 1
  slideRight.style.transform = `translateY(-${
    containerHeight * (slideLength - currentActive)
  }px)`;

  //cara 2
  //   slideRight.style.transform = `translateY(${
  //     containerHeight * currentActive
  //   }px)`;
}
