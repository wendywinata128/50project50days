let btnAdd = document.querySelector("#addnote");
let noteStorage = localStorage.getItem("saved_note");

openNoteSaved();
btnAdd.addEventListener("click", () => addNote());

function openNoteSaved() {
  noteSaved = JSON.parse(noteStorage);

  noteSaved.forEach((item) => {
    addNote(item);
  });
}

function addNote(text = "") {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="action">
        <i class="fas fa-edit edit"></i>
        <i class="fas fa-trash remove"></i>
    </div>
    <div class="main"}">
        <p class="text">${text}</p>
    </div>

    <textarea id="edit-note" class="hidden"></textarea>
    `;

  document.body.appendChild(card);

  let btnRemove = card.querySelector(".remove");
  let btnEdit = card.querySelector(".edit");
  let textArea = card.querySelector("textarea");
  let mainCard = card.querySelector(".main");
  let mainText = card.querySelector(".main .text");

  btnRemove.addEventListener("click", () => {
    card.remove();
  });

  btnEdit.addEventListener("click", () => {
    textArea.classList.toggle("hidden");
    mainCard.classList.toggle("hidden");

    if (!textArea.classList.contains("hidden")) {
      textArea.focus();
      textArea.value = mainText.innerHTML;
    }

    saveNote();
  });

  textArea.addEventListener("change", () => {
    mainText.innerText = textArea.value;
  });
}

function saveNote() {
  let mainText = document.querySelectorAll(".main .text");
  let noteSaved = [];

  mainText.forEach((item) => {
    noteSaved.push(item.innerText);
  });

  localStorage.setItem("saved_note", JSON.stringify(noteSaved));
}
