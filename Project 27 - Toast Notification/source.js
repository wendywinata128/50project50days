let btnMessage = document.querySelector("button");
let toasts = document.querySelector(".toasts");
btnMessage.addEventListener("click", () => showMessage("I Love You"));

function showMessage(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");

  toast.innerText = message;

  toasts.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = `fade-out 1s ease-out forwards`;
    setTimeout(() => {
      //   toast.remove();
      toasts.removeChild(toast);
    }, 1000);
  }, 3000);
}
