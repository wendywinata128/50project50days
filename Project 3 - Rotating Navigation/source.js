let button = document.querySelectorAll("button");
let container = document.querySelector(".container");

button[1].addEventListener("click", () => {
  container.classList.add("show-nav");
});

button[0].addEventListener("click", () => {
  container.classList.remove("show-nav");
});
