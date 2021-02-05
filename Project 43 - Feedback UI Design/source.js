let container = document.querySelector(".container");
let ratings = document.querySelectorAll(".rating");

let myfeedback;

container.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    clearAllActiveRating();
    e.target.parentNode.classList.add("active");
    myfeedback = e.target.parentNode.querySelector("p").innerText;
  } else if (e.target.id === "submit" && myfeedback) {
    container.innerHTML = `
    <br>
    Your Feedback is <strong>${myfeedback}</strong>
    <br>
    Thank you for your feedback.`;
  }
});

function clearAllActiveRating() {
  ratings.forEach((item) => {
    item.classList.remove("active");
  });
}
