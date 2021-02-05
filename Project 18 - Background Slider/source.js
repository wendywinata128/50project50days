const urlImg = [
  "https://images.unsplash.com/photo-1609657331895-afbbbef89695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1587587004741-ea9a81b70bf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1603722796411-de70d5b992e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1608666230495-5234216adf56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

let currentActive = 0;

let btnLeft = document.querySelector(".left-arrow");
let btnRight = document.querySelector(".right-arrow");

let body = document.querySelector("body");
let slide;

function generateSlide() {
  let containerSlide = document.querySelector(".container-slider");
  urlImg.forEach(() => {
    let slideDom = document.createElement("div");
    slideDom.classList.add("slide");

    containerSlide.appendChild(slideDom);
  });

  slide = document.querySelectorAll(".slide");

  moveSlide();
  showSlide();
}

function showSlide() {
  let test2 = document.querySelector(".test2");
  slide.forEach((item) => item.classList.remove("active"));

  body.style.backgroundImage = `url(${urlImg[currentActive]})`;
  test2.style.content = `url(${urlImg[currentActive]})`;
  slide[currentActive].style.backgroundImage = `url(${urlImg[currentActive]})`;
  slide[currentActive].classList.add("active");
  setTimeout(() => {
    slide[
      currentActive
    ].style.transition = `opacity 0.8s ease, transform 1s ease-in-out`;
    slide[currentActive].style.transform = `translateX(0)`;
  }, 30);
}

function moveSlide() {
  btnLeft.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 0) currentActive = slide.length - 1;

    slide[currentActive].style.transition = ``;
    slide[currentActive].style.transform = `translateX(80%)`;

    showSlide();
  });

  btnRight.addEventListener("click", () => {
    currentActive++;

    if (currentActive >= slide.length) currentActive = 0;

    slide[currentActive].style.transition = ``;
    slide[currentActive].style.transform = `translateX(-80%)`;

    showSlide();
  });
}

generateSlide();

function checkMouse() {
  let containerSlide = document.querySelector(".container-slider");
  let width = (window.innerWidth * 15) / 100;
  let height = (window.innerHeight * 15) / 100;
  let test = document.querySelector(".test");
  let test2 = document.querySelector(".test2");

  console.log(width, height);

  containerSlide.addEventListener("mousemove", (e) => {
    test.style.opacity = 1;
    test.style.transform = `translate(${e.x - width - 100}px,${
      e.y - height - 100
    }px)`;
    test2.style.objectPosition = `-${e.x - 100}px -${e.y + height - 100}px`;
  });

  containerSlide.addEventListener("mouseout", () => {
    test.style.opacity = 0;
  });
}

checkMouse();
