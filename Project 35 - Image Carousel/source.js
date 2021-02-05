let imageContainer = document.querySelector(".image-container");
let btnNext = document.querySelector("#next");
let btnPrevious = document.querySelector("#previous");

let interval = setInterval(moveImage, 2000);

let currentActive = 0;

function moveImage() {
  currentActive++;

  if (currentActive == 5) {
    currentActive = 0;
  }

  imageContainer.style.transform = `translateX(-${currentActive * 500}px)`;
}

btnNext.addEventListener("click", () => {
  clearInterval(interval);
  moveImage();
  interval = setInterval(moveImage, 2000);
});

btnPrevious.addEventListener("click", () => {
  clearInterval(interval);
  currentActive--;

  if (currentActive == -1) {
    currentActive = 4;
  }

  console.log(currentActive);

  imageContainer.style.transform = `translateX(-${currentActive * 500}px)`;
  interval = setInterval(moveImage, 2000);
});
