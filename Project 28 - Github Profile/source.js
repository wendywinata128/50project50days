let API_URL = "https://api.github.com/users/";

let iconSearch = document.querySelector(".search-icon");
let searchUser = document.querySelector("#search");
let formSearch = document.querySelector("#form");
let main = document.querySelector("main");

iconSearch.addEventListener("click", () => {
  searchUser.classList.toggle("active");
});

formSearch.addEventListener("submit", (e) => getUser(e));

function getUser(e) {
  e.preventDefault();

  axios(API_URL + e.target[0].value)
    .then((res) => showUser(res))
    .catch(() => userNotFound());
}

function showUser(response) {
  console.log(response);

  let data = response.data;
  main.innerHTML = `
  <div class="card container">
    <div class="container-photo">
        <img class="photo-profile" src="wendy.jpg" alt="" />
    </div>

    <div class="user-info">
        <h4>${data.name}</h4>
        <p>
        ${data.bio}
        </p>
        <ul>
        <li>Followers <strong>${data.followers}</strong></li>
        <li>Following <strong>${data.following}</strong></li>
        <li>Repository <strong>${data.public_repos}</strong></li>
        </ul>

        <div class="repos">
        </div>
    </div>
    </div>
  `;

  axios(data.repos_url + "?sort=created").then((response) => getRepo(response));
}

function userNotFound() {
  main.innerHTML = `
    <div class="card container">
        <h1>User Not Found<h1/>
    </div>`;
}

function getRepo(response) {
  let data = response.data;
  let repos = document.querySelector(".repos");
  repos.innerHTML = "";

  data.slice(0, 5).forEach((item) => {
    let repo = document.createElement("div");
    repo.classList.add("repo");
    repo.innerText = item.name;

    repos.appendChild(repo);
  });
}
