let nav = document.querySelector("nav");
let maxNav = document.querySelector(".max-nav");
let footer = document.querySelector("footer .container");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }

  if (window.scrollY > maxNav.offsetHeight - nav.offsetHeight * 2) {
    nav.style.opacity = "0";
  } else {
    nav.style.opacity = "1";
  }

  if (window.innerHeight > footer.getBoundingClientRect().top + 10) {
    updateCounter();
  }
});

function updateCounter() {
  let numberCounter = document.querySelectorAll(".sosial-group .number");

  numberCounter.forEach((item) => {
    let max = +item.getAttribute("data-target") + 10000;
    let increment = max / 1000;
    item.innerText = "0";

    const reachTarget = () => {
      let number = +item.innerText;

      if (number < max) {
        item.innerText = `${Math.ceil(number + increment)}`;
        setTimeout(reachTarget, 1);
      } else {
        item.innerText = max;
      }
    };

    reachTarget();
  });
}
