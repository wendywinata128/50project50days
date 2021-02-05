let quizBank = [
  {
    question: "What is CSS stand for",
    choice: [
      "Cascading Style Sheet",
      "Cascading Style Sheat",
      "Castle Stealing Stealing",
      "Cascading Stolen Shet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "What Languange known as android native languange",
    choice: ["Java Script", "Python", "Kotlin", "C++"],
    answer: "Kotlin",
  },
  {
    question: "Which is the type of loop in c",
    choice: ["dofor", "dowhile", "whiledo", "forwhile"],
    answer: "dowhile",
  },
  {
    question: "Which languange is faster ?",
    choice: ["Kotlin", "Python", "C++", "Java"],
    answer: "C++",
  },
];

let questionNumber = 0;
let correctAnswer = 0;

let btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", makeQuestion);

makeQuestion();

function makeQuestion() {
  if (questionNumber != 0 && checkChecked()) {
    return;
  } else {
    answerCorrect();
  }

  if (questionNumber > quizBank.length - 1) {
    gameOver();
    return;
  }

  let question = document.querySelector(".question");
  let answers = document.querySelector(".answers");
  question.innerText = quizBank[questionNumber].question;

  answers.innerHTML = "";

  quizBank[questionNumber].choice.forEach((item, idx) => {
    answers.innerHTML += `
        <li>
          <input type="radio" class="answer" value="${item}" name="answer" id="${String.fromCharCode(
      idx + 65
    )}" />
          <label for="${String.fromCharCode(idx + 65)}">${item}</label>
        </li>
      `;
  });
  questionNumber++;
}

function answerCorrect() {
  let answer = document.querySelectorAll(".answer");
  let checked = 0;
  answer.forEach((item, idx) => {
    if (item.checked && item.value === quizBank[questionNumber - 1].answer) {
      correctAnswer++;
      return false;
    }
    if (item.checked) {
      checked++;
    }
  });
}

function checkChecked() {
  let answer = document.querySelectorAll(".answer");
  let checked = 0;

  answer.forEach((item, idx) => {
    if (item.checked) {
      checked++;
    }
  });

  return checked === 0;
}

function gameOver() {
  let container = document.querySelector(".container");

  container.innerHTML = `<h4>Game Is Over<br>${correctAnswer}/${quizBank.length} Correct</br></h4>`;
}
