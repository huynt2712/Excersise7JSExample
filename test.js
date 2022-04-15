let questions = [
  {
    id: 1,
    question: "Công thức hoá học của Oxi già là gì ?",
    answer: ["O2", "O3", "H2O", "H2O2"],
    correct: 0,
  },
  {
    id: 2,
    question: "hello my friend",
    answer: ["a", "b", "c", "d"],
    correct: 2,
  },
  {
    id: 3,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 4,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 5,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 6,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 7,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 8,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 9,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
  {
    id: 10,
    question: "xin chào các bạn",
    answer: ["a", "b", "c", "d"],
    correct: 3,
  },
];

let answers = [
  'input[name="1"]',
  'input[name="2"]',
  'input[name="3"]',
  'input[name="4"]',
  'input[name="5"]',
  'input[name="6"]',
  'input[name="7"]',
  'input[name="8"]',
  'input[name="9"]',
  'input[name="10"]',
];

let currentQuestion = 0,
  i = 0,
  total = 0;
let listAnswer = [];

function showScreen(screenName) {
  let screens = document.querySelectorAll(".gameshow>div");
  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  let currentScreen = document.getElementById(screenName);
  currentScreen.style.display = "block";
}

// function getQuestions(questions) {
//   let list = document.getElementById("myList");
//   for (let i = 0; i < questions.length; i++) {
//     console.log(questions[i]);
//     let li = document.createElement("li");
//     li.innerHTML = questions[i].question;
//     list.appendChild(li);

//     for (let j = 0; j < questions[i].answer.length; j++) {
//       let checkAnswer = document.createElement("input");
//       let labelAnswer = document.createElement("label");
//       checkAnswer.type = "radio";
//       checkAnswer.id = questions[i].id;
//       checkAnswer.name = questions[i].id;
//       checkAnswer.value = questions[i].answer[j];
//       labelAnswer.innerHTML = questions[i].answer[j];
//       list.appendChild(checkAnswer);
//       list.appendChild(labelAnswer);
//     }
//   }
// }

function renderQuestion(question) {
  let list = document.getElementById("myList");
  let li = document.createElement("li");
  li.innerHTML = questions[question].question;
  list.appendChild(li);
  for (let j = 0; j < questions[question].answer.length; j++) {
    let checkAnswer = document.createElement("input");
    let labelAnswer = document.createElement("label");
    checkAnswer.type = "radio";
    checkAnswer.id = questions[question].id;
    checkAnswer.name = questions[question].id;
    checkAnswer.value = questions[question].answer[j];
    labelAnswer.innerHTML = questions[question].answer[j];
    list.appendChild(checkAnswer);
    list.appendChild(labelAnswer);
  }
}

//getQuestions(questions);
const resultBtn = document.querySelector("#resetBtn");
const startBtn = document.querySelector("#startBtn");
const submitBtn = document.querySelector("#submitBtn");
showScreen("StartBtn");

// function getAnswer(answers) {
//   let listAnswer = [];
//   let total = 0;
//   let list = document.getElementById("myList");
//   for (let i = 0; i < answers.length; i++) {
//     for (let j = 0; j < document.querySelectorAll(answers[i]).length; j++) {
//       if (
//         document.querySelectorAll(answers[i])[j].checked &&
//         document.querySelectorAll(answers[i])[j].value ==
//           questions[i].answer[questions[i].correct]
//       ) {
//         listAnswer.push(document.querySelectorAll(answers[i])[j].value);
//         break;
//       } else if (
//         document.querySelectorAll(answers[i])[j].checked &&
//         document.querySelectorAll(answers[i])[j].value !==
//           questions[i].answer[questions[i].correct]
//       ) {
//         list.innerHTML = "Trò chơi kết thúc";
//       }
//     }
//   }
//   for (let m = 0; m < listAnswer.length; m++) {
//     if (listAnswer[m] == questions[m].answer[questions[m].correct]) {
//       total++;
//     }
//   }
//   if (total == 10) {
//     list.innerHTML = "Chúc mừng bạn";
//   }
// }

function checkAnswer(answers) {
  let list = document.getElementById("myList");
  for (let j = 0; j < document.querySelectorAll(answers[i]).length; j++) {
    if (
      document.querySelectorAll(answers[i])[j].checked &&
      document.querySelectorAll(answers[i])[j].value ==
        questions[i].answer[questions[i].correct]
    ) {
      listAnswer.push(document.querySelectorAll(answers[i])[j].value);
      i++;
      total++;
      if (currentQuestion < 9) {
        currentQuestion++;
      }
      renderQuestion(currentQuestion);
    } else if (
      document.querySelectorAll(answers[i])[j].checked &&
      document.querySelectorAll(answers[i])[j].value !==
        questions[i].answer[questions[i].correct]
    ) {
      let correctAnswer = questions[i].answer[questions[i].correct];
      list.innerHTML =
        "Trò chơi kết thúc, câu trả lời đúng là câu " + correctAnswer;
      currentQuestion = 0;
      setTimeout(() => {
        let screens = document.querySelectorAll(".gameshow>div");
        screens.forEach((screen) => {
          screen.style.display = "none";
        });

        let currentScreen = document.getElementById("StartBtn");
        currentScreen.style.display = "block";
        list.innerHTML = "";
      }, 5000);
    }
  }
  if (total == 10) {
    list.innerHTML = "Chúc mừng bạn";
  }
}

startBtn.addEventListener("click", function () {
  showScreen("questions");
  renderQuestion(currentQuestion);
});

submitBtn.addEventListener("click", function () {
  checkAnswer(answers);
});

//console.log(getAnswer(answers));
// const question1 = document.querySelectorAll('input[name="1"]');
// const question2 = document.querySelectorAll('input[name="2"]');
// const question3 = document.querySelectorAll('input[name="3"]');

// resultBtn.addEventListener("click", function () {
//   getAnswer(answers);
// });

//   let listAnswer = [];
//   let total = 0;
//   for (let i = 0; i < question1.length; i++) {
//     if (question1[i].checked) {
//       // console.log(question1[i].value);
//       listAnswer.push(question1[i].value);
//       break;
//     }
//   }
//   for (let i = 0; i < question2.length; i++) {
//     if (question2[i].checked) {
//       console.log(question2[i].value);
//       listAnswer.push(question2[i].value);
//       break;
//     }
//   }
//   for (let i = 0; i < question3.length; i++) {
//     if (question3[i].checked) {
//       listAnswer.push(question3[i].value);
//       break;
//     }
//   }
//   //   console.log(listAnswer);
//   for (let i = 0; i < listAnswer.length; i++) {
//     if (listAnswer[i] == questions[i].answer[questions[i].correct]) {
//       total++;
//     }
//   }
//   console.log(total);
// });
