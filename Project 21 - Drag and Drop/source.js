let fill = document.querySelector(".fill");

let empties = document.querySelectorAll(".box");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 10);
}

function dragEnd() {
  this.className = "fill";
}

empties.forEach((item) => {
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", dragDrop);
});

function dragEnter(e) {
  e.preventDefault();

  this.className += " hover";
}

function dragLeave() {
  this.className = "box";
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  this.className = "box";
  this.appendChild(fill);
}
