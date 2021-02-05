let container = document.querySelector(".container");

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const types = Object.keys(colors);

const fetchPokemon = async () => {
  for (let i = 1; i <= 150; i++) {
    await getPokemon(i);
  }
};

let getPokemon = async (index) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${index}`;
  const response = await fetch(URL);
  const data = await response.json();
  createPokemon(data, index);
};

fetchPokemon();

async function createPokemon(data, index) {
  let card = document.createElement("div");
  card.classList.add("card");

  let name = data.forms[0].name;
  let id = data.id.toString().padStart(3, "0");
  let parseId = parseInt(id);
  let poke_types = data.types.map((item) => {
    return item.type.name;
  });

  let type = types.find((type) => {
    return poke_types.indexOf(type) > -1;
  });

  card.style.background = colors[type];

  card.innerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${parseId}.png" />
        </div>
        <span class="id">#${id}</span>
        <h4 class="name">${name}</h4>
        <span class="type">Type:${poke_types}</span>
    `;

  container.appendChild(card);
}
