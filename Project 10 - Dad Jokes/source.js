let jokes = document.querySelector(".jokes");
let btnGenerate = document.querySelector("button");

btnGenerate.addEventListener("click", awaitGenerateJokes);

awaitGenerateJokes();

function generateJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((data) => {
      jokes.innerText = data.joke;
    });
}

async function awaitGenerateJokes() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  let data = await response.json();

  jokes.innerText = data.joke;
}
