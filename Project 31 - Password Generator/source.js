let key_lowercase = "abcdefghijklmnopqrstuvwxyz";
let key_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let key_numbers = "0123456789";
let key_symbols = "~!@#$%^&*()_+=-;";

let btnGenerate = document.querySelector(".generate-password");
let checked = document.querySelectorAll(".check");
let passLength = document.querySelector("#length-password");
let passResult = document.querySelector(".password");
let clipBoard = document.querySelector(".save");
let savedPasswordEl = document.querySelector(".savedPassword");
let savedPasswordContainer = document.querySelector(".savedPassword-container");

savedPasswordEl.addEventListener("click", () => {
  savedPasswordContainer.classList.toggle("active");

  let containerSaved = document.querySelector(".container-saved");
  let savedPassword = JSON.parse(localStorage.getItem("savedPassword"));

  containerSaved.innerHTML = `<i class="fas fa-trash delete-all-saved"></i>`;

  savedPassword.forEach((item) => {
    let passwordEl = document.createElement("span");

    passwordEl.innerHTML = `
        <p class="password">${item.savedPassword}</p>
        <i class="far fa-clipboard copy-saved"></i>
      `;

    containerSaved.appendChild(passwordEl);
  });

  let btnCopySaved = document.querySelectorAll(".copy-saved");

  btnCopySaved.forEach((item, idx) => {
    item.addEventListener("click", () => {
      let textArea = document.createElement("textArea");
      textArea.value = savedPassword[idx].savedPassword;

      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();

      alert("Password Copied");
    });
  });
});

clipBoard.addEventListener("click", () => {
  let textArea = document.createElement("textarea");
  textArea.value = passResult.innerText;

  if (textArea.value === "") return;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();

  savePassword();
  alert("Password Copied");
});

function savePassword() {
  let savedPassword = localStorage.getItem("savedPassword");
  savedPassword = savedPassword === null ? [] : JSON.parse(savedPassword);

  savedPassword.push({ savedPassword: passResult.innerText });

  console.log(savedPassword);
  localStorage.setItem("savedPassword", JSON.stringify(savedPassword));
}

let randomWord = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols,
};

function getRandomLowercase() {
  return key_lowercase[Math.floor(Math.random() * key_lowercase.length)];
}

function getRandomUppercase() {
  return key_uppercase[Math.floor(Math.random() * key_uppercase.length)];
}

function getRandomNumbers() {
  return key_numbers[Math.floor(Math.random() * key_numbers.length)];
}

function getRandomSymbols() {
  return key_symbols[Math.floor(Math.random() * key_symbols.length)];
}

btnGenerate.addEventListener("click", () => {
  let length = passLength.value;
  let result = "";

  let uppercase = checked[0].checked;
  let lowercase = checked[1].checked;
  let numbers = checked[2].checked;
  let symbols = checked[3].checked;

  let keyChecked = [
    { uppercase },
    { lowercase },
    { numbers },
    { symbols },
  ].filter((item) => Object.values(item)[0]);

  while (result.length < length) {
    let randomKey = keyChecked[Math.floor(Math.random() * keyChecked.length)];
    randomKey = Object.keys(randomKey)[0];

    result += randomWord[randomKey]();

    passResult.innerText = result;
  }

  //   while (result.length < length) {
  //     result += checked[0].checked ? getRandomLowercase() : "";
  //     result += checked[0].checked ? getRandomUppercase() : "";
  //     result += checked[0].checked ? getRandomNumbers() : "";
  //     result += checked[0].checked ? getRandomSymbols() : "";
  //   }
  //   result.slice(0, length);
});
