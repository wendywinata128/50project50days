let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  let top = e.clientY;
  let left = e.clientX;

  let offsetTop = e.target.offsetTop;
  let offsetLeft = e.target.offsetLeft;

  console.log(top - offsetTop, e.offsetY);

  let circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = `${top - offsetTop}px`;
  circle.style.left = `${left - offsetLeft}px`;

  setTimeout(() => {
    button.removeChild(circle);
  }, 500);

  button.appendChild(circle);
});
