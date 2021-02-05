let navEl = document.querySelectorAll(".nav");
let buttonEl = document.querySelectorAll("button");

buttonEl.forEach((item) =>
  item.addEventListener("click", () => {
    navEl.forEach((item) => item.classList.toggle("visible"));
  })
);
