let squares = document.querySelectorAll(".square");
let randomColor = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

squares.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let color = getRandomColor();
    item.style.backgroundColor = color;
    item.style.boxShadow = `0px 0px 2px ${color},0px 0px 10px ${color}`;
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "#1d1d1d";
    item.style.boxShadow = "0px 0px 2px #000";
  });
});

function getRandomColor() {
  return randomColor[Math.floor(Math.random() * randomColor.length)];
}
