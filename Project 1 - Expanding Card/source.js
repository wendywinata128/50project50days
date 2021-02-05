let picture = document.querySelectorAll(".picture");

picture.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeActiveClass();
    item.classList.add("active");
  });
});

let removeActiveClass = () => {
  picture.forEach((item) => {
    item.classList.remove("active");
  });
};
