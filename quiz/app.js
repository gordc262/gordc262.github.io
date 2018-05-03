(function() {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

 
      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");


    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "#238800";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "The name 'Manhattan' comes from the Lenape 'Mannahatta'. What does that translate to?",
      answers: {
        a: "Land by the Sea",
        b: "Land of Many Hills",
        c: "Village"
      },
      correctAnswer: "b"
    },
    {
      question: "The Hudson River is named after British Explorer Henry Hudson. What was he looking for in North America?",
      answers: {
        a: "Gold and precious metals",
        b: "Furs",
        c: "A passageway to Asia"
      },
      correctAnswer: "c"
    
    },
    {
     question: "True or False: The Statue of Liberty and the Brooklyn Bridge opened in the same year: 1886.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
   
    },
    {
      question: "What year did the first NYC subway open?",
      answers: {
        a: "1890",
        b: "1904",
        c: "1932"
      },
      correctAnswer: "b"
    },
    {
     question: "Approximately how many colleges and universities are in New York City?",
      answers: {
        a: "30",
        b: "85",
        c: "110"
      },
      correctAnswer: "c"
    },
    {
     question: "Which of these prominent literary figures was born in New York City?",
      answers: {
        a: "Herman Melville",
        b: "Henry David Thoreau",
        c: "Louisa May Alcott"
      },
      correctAnswer: "a"
    },
    {
     question: "True or False: Until 1898, New York City was only Manhattan - Brooklyn, the Bronx, and Queens were seperate cities.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
     question: "Which of these parks was created through land reclamation, or landfill?",
      answers: {
        a: "The High Line",
        b: "Battery Park City",
        c: "Hudson Park River"
      },
      correctAnswer: "b"
    },
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();
