let todoContainer = document.querySelector(".list-todo");
let inputTodo = document.querySelector("input#input-todo");
let listTodo = [];

openTodo();

inputTodo.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    makeTodo(e.target.value);
    saveTodo();
  }
});

function makeTodo(text) {
  let todo = document.createElement("div");
  todo.classList.add("todo");
  if (text.includes("cmpt")) {
    text = text.replace("cmpt", "");
    todo.classList.add("completed");
  }
  todo.innerText = text;

  todo.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todo.remove();
    saveTodo();
  });

  todo.addEventListener("click", () => {
    todo.classList.toggle("completed");
    saveTodo();
  });

  listTodo.push(todo);
  todoContainer.appendChild(todo);
  inputTodo.value = "";
}

function openTodo() {
  let todo = JSON.parse(localStorage.getItem("todo"));

  if (todo)
    todo.forEach((item) => {
      makeTodo(item);
    });
}

function saveTodo() {
  listTodo = [];
  let todo = document.querySelectorAll(".todo");

  todo.forEach((item) => {
    listTodo.push(
      item.classList.contains("completed")
        ? item.innerText + "cmpt"
        : item.innerText
    );
  });

  localStorage.setItem("todo", JSON.stringify(listTodo));
}
