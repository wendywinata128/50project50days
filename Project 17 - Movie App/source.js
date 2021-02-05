const URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

getMovies();

async function getMovies() {
  const response = await fetch(URL);
  const data = await response.json();

  showMovies(data.results);

  const formSearch = document.querySelector("#form-search");

  formSearch.addEventListener("submit", (e) => searchMovies(e));
}

async function searchMovies(e) {
  e.preventDefault();
  const searchMovie = document.querySelector("#form-search input").value;

  if (searchMovie === "") {
    getMovies();
    return;
  }

  const response = await fetch(SEARCH_URL + searchMovie);
  const data = await response.json();

  showMovies(data.results);
}

function showMovies(data) {
  const mainLayout = document.querySelector("main");
  mainLayout.innerHTML = "";

  data.forEach((item) => {
    const { title, poster_path, vote_average, overview } = item;
    let movie = document.createElement("div");
    movie.classList.add("movie");

    movie.innerHTML = `
        <img
          src="${IMG_PATH}/${poster_path}"
          alt="movie image"
          class="movie-picture"
        />
        <div class="movie-desc">
          <h3 class="title">${title}</h3>
          <span class="rating ${
            vote_average > 7 ? "green" : "red"
          }">${vote_average}</span>
        </div>
        <div class="movie-info">
        ${overview}
        </div>
      `;

    mainLayout.appendChild(movie);
  });
}
