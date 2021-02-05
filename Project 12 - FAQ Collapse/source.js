let buttons = document.querySelectorAll(".buttons");
let card = document.querySelectorAll(".card");

buttons.forEach((item, index) => {
  item.addEventListener("click", () => {
    card[index].classList.toggle("active");
  });
});
