let canvas = document.querySelector("#canvas");
let size = 10;

let isDrawing = false;
let x;
let y;
let color = "#f42525";

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawCircle(x, y);
    drawLine(x, x2, y, y2);
    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

function drawCircle(x, y) {
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, x2, y1, y2) {
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function buttonFunction() {
  let btnMinus = document.querySelector("#minus");
  let btnPlus = document.querySelector("#plus");
  let colorPicker = document.querySelector("#color");
  let btnClear = document.querySelector("#clear");
  let sizeEl = document.querySelector(".size");

  colorPicker.value = color;

  colorPicker.addEventListener("change", (e) => {
    color = e.target.value;
  });

  btnMinus.addEventListener("click", () => {
    if (size == 1) {
      return;
    }
    size--;
    updateSizeEl(sizeEl);
  });

  btnPlus.addEventListener("click", () => {
    size++;
    updateSizeEl(sizeEl);
  });

  btnClear.addEventListener("click", () => {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  });
}

function updateSizeEl(item) {
  item.innerHTML = size;
}

buttonFunction();
