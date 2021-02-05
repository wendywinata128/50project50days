let usersMain = document.querySelector(".main");
let loading = document.querySelector(".loading");

let search = document.querySelector("#search");

getUser();
searchUser();

async function getUser() {
  const response = await fetch("https://randomuser.me/api?results=20");

  const { results } = await response.json();

  usersMain.innerHTML = "";
  results.forEach((item) => {
    let user = document.createElement("div");
    user.classList.add("user");
    user.innerHTML = `
    <img
    src="${item.picture.large}"
    alt="${item.name.first}" />
          
    <div class="user-info">
        <h4>${item.name.title} ${item.name.first} ${item.name.last}</h4>
        <p>${item.location.city}, ${item.location.country}</p>
    </div>
    `;

    usersMain.appendChild(user);
  });
}

function searchUser() {
  search.addEventListener("input", (e) => {
    let userEl = document.querySelectorAll(".user");
    const searchValue = e.target.value;

    userEl.forEach((item, idx) => {
      if (!item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
        userEl[idx].classList.add("hidden");
      } else {
        userEl[idx].classList.remove("hidden");
      }
    });
  });
}
