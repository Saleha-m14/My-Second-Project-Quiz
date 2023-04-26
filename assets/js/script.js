const questions = [
    {
        question: "What is the meaning of eager?",
        answers: [
              {text: "sea", correct: false},
              {text: "keen", correct: true},
              {text: "south", correct: false},
              {text: "response", correct: false},
            ]
    },
    {
        question: "What is the meaning of affect?",
        answers: [
              {text: "infuence", correct: true},
              {text: "quiet", correct: false},
              {text: "risk", correct: false},
              {text: "witch", correct: false},
            ]
    },
    {
        question: "What is the meaning of capital?",
        answers: [
              {text: "city", correct: true},
              {text: "object", correct: false},
              {text: "center", correct: false},
              {text: "explain", correct: false},
            ]
    },
    {
        question: "What is the meaning of silent?",
        answers: [
              {text: "way", correct: false},
              {text: "case", correct: false},
              {text: "quite", correct: true},
              {text: "idea", correct: false},
            ]
    },
    {
        question: "What is the meaning of Peace?",
        answers: [
              {text: "way", correct: false},
              {text: "hear", correct: false},
              {text: "build", correct: false},
              {text: "absence of war", correct: true},
            ]
    },
    {
        question: "What is the meaning of Except?",
        answers: [
              {text: "course", correct: false},
              {text: "leave out", correct: true},
              {text: "loud", correct: false},
              {text: "absence", correct: false},
            ]
    },
    {
        question: "What is the meaning of frigid?",
        answers: [
              {text: "start", correct: false},
              {text: "know", correct: false},
              {text: "play", correct: false},
              {text: "cool", correct: true},
            ]
    },
    {
        question: "What is the meaning of slice?",
        answers: [
              {text: "cut", correct: true},
              {text: "count", correct: false},
              {text: "destroy", correct: false},
              {text: "carry", correct: false},
            ]
    }
  
  
  ];
let firstDiv = document.getElementById("hello");
const nameInput = document.getElementById("name");
let welcome = document.getElementById("welcome");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const marqueeParagraph = document.getElementById("marquee");


function displayName() {
  welcome.innerHTML = "Hey " + nameInput.value + ", Lets test your English" ;
  firstDiv.style.display = "none";


}
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}
function selectAnswer (e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
      
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
    
};
function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else {
    displayScore();
  }
}
function displayScore() {
  resetState();
  welcome.innerHTML = "You have completed the quiz!"
  questionElement.innerHTML = `
  <h1>Good!</h1><hr>
  <p>You scored ${score} out of ${questions.length}.</p>`;
  nextButton.innerHTML = "Replay";
  nextButton.style.display = "block";
  marqueeParagraph.innerHTML = "The End";

}
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
    marqueeParagraph.innerHTML = "Try Again";
  }
})

function showQuestion() {
    resetState();
	// show question
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	// show answers
	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);

	  
	});
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();
  