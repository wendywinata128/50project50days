let containerProject = document.querySelector(".projects");
let iframeHero = document.querySelector(".hero iframe");
let btnViewonWebsite = document.querySelector(".btn-view");

let projects = {
  0: "Expanding Card",
  1: "Progress Steps",
  2: "Rotating Navigation",
  3: "Hidden Search",
  4: "Blurry Loading",
  5: "Scroll Animation",
  6: "Split Landing Page",
  7: "Form Wave",
  8: "Sound Board",
  9: "Dad Jokes",
  10: "Event Key Codes",
  11: "FAQ Collapse",
  12: "Random Choice Picker",
  13: "Animated Navigation",
  14: "Incrementing Counter",
  15: "Drink Water",
  16: "Movie App",
  17: "Background Slider",
  18: "Theme Clock",
  19: "Button Ripple Effect",
  20: "Drag and Drop",
  21: "Draw App",
  22: "Kinetic Loading",
  23: "Content Placeholder",
  24: "Sticky Navbar",
  25: "Double Vertical Slider",
  26: "Toast Notification",
  27: "Github Profile",
  28: "Double Heart Click",
  29: "Auto Text Effect",
  30: "Password Generator",
  31: "Good, Cheap, Fast Checkboxes",
  32: "Notes App",
  33: "Animated Countdown",
  34: "Image Carousel",
  35: "Hoverboard",
  36: "Pokedex",
  37: "Mobile Tab Navigation",
  38: "Password Strength Background",
  39: "Background Boxes",
  40: "Verify Account UI",
  41: "Live User Filter",
  42: "Feedback UI Design",
  43: "Custom Range Slider",
  44: "Netflix Mobile Navigation",
  45: "Quiz App",
  46: "Testimonial Box",
  47: "Random Image Feed",
  48: "Todos App",
  49: "Insert Catch Game",
};

let projectNumber = Object.keys(projects);

projectNumber.some((item) => {
  let project = document.createElement("div");
  project.classList.add("project");

  project.innerHTML = `
    <h2>Day ${+item + 1}</h2>
    <iframe frameborder="0" scrolling="no" src="../Project ${+item + 1} - ${
    projects[+item]
  }"></iframe>
  <div class="click"></div>
  `;

  project.querySelector(".click").addEventListener("click", () => {
    removeAllActive();
    btnViewonWebsite.href = `../Project ${+item + 1} - ${projects[+item]}`;
    iframeHero.src = `../Project ${+item + 1} - ${projects[+item]}`;
    project.classList.add("active");
  });
  containerProject.appendChild(project);
});

let projectsEl = document.querySelectorAll(".project");
projectsEl[0].classList.add("active");

function removeAllActive() {
  projectsEl.forEach((item) => item.classList.remove("active"));
}
