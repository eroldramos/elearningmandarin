d = document


d.getElementById('takeQuizBtn').onclick = function(){
  takeQuiz();
}

function takeQuiz(){
  $.ajax({
    type: "post",
    url: window.location.href,
    dataType: "json",
    data: {
      csrfmiddlewaretoken : d.getElementsByName('csrfmiddlewaretoken')[0].value,
      startQuiz : true,
    },
    cache: false,
    success: function(data) {
        d.getElementById('quizBox').style.display = 'flex';
        d.getElementById('lessonBox').style.display = 'none';
        quizInfo(
          title = data.title,
          description = data.description,
          time = parseInt(data.time),
          passingScore = data.passingScore,
          questions = JSON.parse(data.questions)
        )
    },
    error: function(xhr, status, error) {
        alert(error)
    }
});
}

function quizInfo(title, description, time, passingScore, questions){
  const quizContainer = d.getElementById('quiz');
  const resultsContainer = d.getElementById('results');
  const submitButton = d.getElementById('submit');
  const myQuestions = questions
  
  d.getElementById('quizTitle').innerHTML = title;
  d.getElementById('quizDescription').innerHTML = description;
  d.getElementById('quizPassingScore').innerHTML = `Passing Score: ${passingScore}`;

  d.getElementById('startQuizBtn').onclick = function() {
    d.getElementById('quizContainer').style.display = 'flex';
    d.getElementById('startQuizBtn').style.display = 'none';
    
    startTimer(time)
  }

  function buildQuiz(){
  
    const displayQuestions = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

       
        const answers = [];

        if(currentQuestion.type === "MC"){

        for(letter in currentQuestion.answers){

          answers.push(
            `<div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input"  type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>
            </div>
              `
          );
        }

        }

        if(currentQuestion.type === "TF"){
            
        for(letter in currentQuestion.answers){

          answers.push(
            `<div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input"  type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>
            </div>
              `
          );
        }
        }

        if(currentQuestion.type === "I"){
            answers.push(
                `<div class="form-group">
                <label class="form-label mt-4">
                  <input class="form-control" type="text" name="question${questionNumber}">
                </label>
              </div>
                `
              );
           
        }
         
        
        displayQuestions.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = displayQuestions.join('');
  }

  
  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        if(currentQuestion.type == "MC"){
            answerContainer = answerContainers[questionNumber];
            selector = `input[name=question${questionNumber}]:checked`;
            userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;

                answerContainers[questionNumber].style.color = 'green';
            }
            else{
                answerContainers[questionNumber].style.color = 'red';
            }
        }

        if (currentQuestion.type === "TF"){
            answerContainer = answerContainers[questionNumber];
            selector = `input[name=question${questionNumber}]:checked`;
            userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;

                answerContainers[questionNumber].style.color = 'green';
            }
            else{
                answerContainers[questionNumber].style.color = 'red';
            }
        }

        if (currentQuestion.type === "I"){
            answerContainer = answerContainers[questionNumber];
            selector = `input[name=question${questionNumber}]`;
            userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;

                answerContainer.querySelector(selector).style.borderColor = 'green';
            }
            else{
                answerContainer.querySelector(selector).style.borderColor = 'red';
            }
        }

      
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    submitResult(numCorrect)
  }

  
  buildQuiz();

  submitButton.onclick = function(){showResults()}



  const timer = d.getElementById("timer");

function startTimer(time){
  if (time.toString().length < 2) {
    timer.innerHTML = `<b>0${time}:00</b>`;
  } else {
    timer.innerHTML = `<b>${time}:00</b>`;
  }

  let minutes = time - 1;
  let seconds = 60;
  let displaySeconds;
  let displayMinutes;

  const stopTimer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes.toString().length < 2) {
      displayMinutes = "0" + minutes;
    } else {
      displayMinutes = minutes;
    }
    if (seconds.toString().length < 2) {
      displaySeconds = "0" + seconds;
    } else {
      displaySeconds = seconds;
    }
    if (minutes === 0 && seconds === 0) {
      timer.innerHTML = "<b>00:00</b>";
      setTimeout(function(){
        clearInterval(stopTimer);
        showResults();
      }, 500);
    }

    timer.innerHTML = `<b>${displayMinutes}:${displaySeconds}</b>`;
  }, 1000);
};

function submitResult(score){
  $.ajax({
    type: "post",
    url: window.location.href,
    data: {
      csrfmiddlewaretoken : d.getElementsByName('csrfmiddlewaretoken')[0].value,
      score: parseInt(score),
    },
    cache: false,
    success: function(data) {
      alert(`Time is up! Your recorded score is ${score}`);
      window.location.reload();
    },
    error: function(xhr, status, error) {
        alert(error)
    }
});
}
}

