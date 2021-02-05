//small cups
let smallCup = document.querySelectorAll(".cup-small");

smallCup.forEach((item, index) => {
  item.addEventListener("click", () => {
    fillSmallCup(index);

    updateBigCups();
  });
});

function fillSmallCup(indexChoose) {
  if (
    smallCup[indexChoose].classList.contains("full") &&
    (indexChoose == smallCup.length - 1 ||
      !smallCup[indexChoose].nextElementSibling.classList.contains("full"))
  ) {
    indexChoose--;
  }

  smallCup.forEach((item, index) => {
    if (index <= indexChoose) {
      item.classList.add("full");
    } else {
      item.classList.remove("full");
    }
  });
}

//big cups

function updateBigCups() {
  let percentage = document.querySelector(".percentage");
  let fullCups = document.querySelectorAll(".cup-small.full").length;
  let target = document.querySelector(".title span");
  let remain = document.querySelector(".title");

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / smallCup.length) * 330}px`;
    percentage.innerHTML = `${(fullCups / smallCup.length) * 100}%`;

    target.innerHTML = `${2 - (fullCups / smallCup.length) * 2}L`;
  }

  if (fullCups === smallCup.length) {
    remain.style.visibility = "hidden";
    remain.style.height = "0";
  } else {
    remain.style.visibility = "visible";
    remain.style.height = "auto";
  }
}
