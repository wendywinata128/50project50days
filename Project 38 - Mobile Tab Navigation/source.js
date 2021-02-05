let menus = document.querySelectorAll("nav ul li");
let contents = document.querySelectorAll(".content");

const initMenu = () => {
  menus.forEach((item, idx) => {
    item.addEventListener("click", () => {
      hideAllContents();
      removeAllActiveMenu();

      item.classList.add("active");
      contents[idx].classList.add("show");
    });
  });
};

function hideAllContents() {
  contents.forEach((item) => {
    item.classList.remove("show");
  });
}

function removeAllActiveMenu() {
  menus.forEach((item) => {
    item.classList.remove("active");
  });
}

initMenu();
