let background = document.querySelector(".background");

let inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", (e) => {
  let passLength = e.target.value.length;

  background.style.filter = `blur(${30 - passLength * 3}px)`;
});
