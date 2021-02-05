let container = document.querySelector(".container");

window.addEventListener("keydown", (event) => {
  container.innerHTML = `
  <div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `;
});
