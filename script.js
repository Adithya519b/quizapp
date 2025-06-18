let selectmath=document.querySelector("#selectmath");
let selectbtn=document.querySelector(".selectbtn");
let selectscience=document.querySelector("#selectscience");
let selecthistory=document.querySelector("#selecthistory");
let selectlogic=document.querySelector("#selectlogic");
let container=document.querySelector(".container");
let start=document.querySelector(".start");
let submitbtn=document.querySelector(".submitbtn");
let quiz={
    mathQuiz : [
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "What is 12 - 4?",
    options: ["6", "8", "9", "7"],
    answer: "8"
  },
  {
    question: "What is 6 x 3?",
    options: ["18", "16", "20", "12"],
    answer: "18"
  },
  {
    question: "What is 25 ÷ 5?",
    options: ["6", "5", "4", "3"],
    answer: "5"
  },
  {
    question: "What is the square of 7?",
    options: ["42", "48", "49", "56"],
    answer: "49"
  },
  {
    question: "What comes next: 2, 4, 8, 16, ...?",
    options: ["18", "24", "32", "20"],
    answer: "32"
  },
  {
    question: "What is the value of π (approx)?",
    options: ["3.12", "3.14", "3.15", "3.10"],
    answer: "3.14"
  }
],
historyQuiz : [
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Dr. Rajendra Prasad", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "In which year did India gain independence?",
    options: ["1942", "1945", "1947", "1950"],
    answer: "1947"
  },
  {
    question: "Who was known as the Iron Man of India?",
    options: ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "B. R. Ambedkar"],
    answer: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Which war ended in 1945?",
    options: ["World War I", "World War II", "Cold War", "Vietnam War"],
    answer: "World War II"
  },
  {
    question: "Who discovered America?",
    options: ["Vasco da Gama", "Christopher Columbus", "Marco Polo", "James Cook"],
    answer: "Christopher Columbus"
  },
  {
    question: "The Great Wall of China was built to protect against which group?",
    options: ["Romans", "Vikings", "Mongols", "Persians"],
    answer: "Mongols"
  },
  {
    question: "Who wrote the Indian Constitution?",
    options: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad"],
    answer: "Dr. B. R. Ambedkar"
  }
],
scienceQuiz : [
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "HO2"],
    answer: "H2O"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "How many legs does an insect have?",
    options: ["4", "6", "8", "10"],
    answer: "6"
  },
  {
    question: "What gas do plants absorb from the air?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which organ pumps blood throughout the body?",
    options: ["Lungs", "Brain", "Heart", "Liver"],
    answer: "Heart"
  },
  {
    question: "What force pulls things toward the Earth?",
    options: ["Magnetism", "Friction", "Electricity", "Gravity"],
    answer: "Gravity"
  },
  {
    question: "Which part of the plant makes food?",
    options: ["Root", "Stem", "Flower", "Leaf"],
    answer: "Leaf"
  }
],
logicQuiz : [
  {
    question: "What comes next: 2, 4, 8, 16, ...?",
    options: ["18", "32", "24", "20"],
    answer: "32"
  },
  {
    question: "Which number is the odd one out: 3, 5, 7, 9, 11?",
    options: ["5", "7", "9", "11"],
    answer: "9"
  },
  {
    question: "If ALL PENS are TOOLS and SOME TOOLS are BLUE, which is true?",
    options: [
      "All PENS are BLUE",
      "Some TOOLS are not PENS",
      "Some PENS may be BLUE",
      "No TOOLS are BLUE"
    ],
    answer: "Some PENS may be BLUE"
  },
  {
    question: "Which one of these is a square number?",
    options: ["15", "18", "20", "25"],
    answer: "25"
  },
  {
    question: "If 1=5, 2=10, 3=15, 4=20, then 5=?",
    options: ["1", "5", "10", "25"],
    answer: "1"
  },
  {
    question: "What is the missing number: 1, 3, 6, 10, 15, __?",
    options: ["20", "21", "19", "18"],
    answer: "21"
  },
  {
    question: "Which word does NOT belong: Apple, Banana, Carrot, Mango?",
    options: ["Apple", "Carrot", "Banana", "Mango"],
    answer: "Carrot"
  }
]
}
let currentQuestionIndex = 0;
let points = 0;
let quizSet = [];


start.addEventListener("click", () => {
  let selected = selectbtn.value;
  currentQuestionIndex = 0;
  points = 0;

  switch (selected) {
    case "math":
      quizSet = quiz.mathQuiz;
      break;
    case "science":
      quizSet = quiz.scienceQuiz;
      break;
    case "history":
      quizSet = quiz.historyQuiz;
      break;
    case "logic":
      quizSet = quiz.logicQuiz;
      break;
    default:
      container.innerHTML = "<p>Please select a valid quiz.</p>";
      return;
  }

  container.innerHTML = "";
  displayQuestion();
});

function displayQuestion() {
  container.innerHTML = "";
  if (currentQuestionIndex >= quizSet.length) {
    container.innerHTML = `<h3>Quiz Completed! 🎉</h3><br><p>Your Score: ${points}/${quizSet.length}</p>`;
    return;
  }

  const questionObj = quizSet[currentQuestionIndex];

  const questionHTML = `<h3>${questionObj.question}</h3>`;
  let optionsHTML = "";
  questionObj.options.forEach((opt) => {
    optionsHTML += `<button class="optionbtn">${opt}</button>`;
  });

  container.innerHTML = `
    <div class="question-block">
      ${questionHTML}
      <div class="options">${optionsHTML}</div>
    </div>
  `;

  const optionButtons = document.querySelectorAll(".optionbtn");
  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === questionObj.answer) {
        points++;
      }
      currentQuestionIndex++;
      displayQuestion(); // Move to next question
    });
  });
}
