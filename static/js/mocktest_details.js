d = document

takeQuiz();


function takeQuiz(){
  $.ajax({
    type: "post",
    url: window.location.href,
    dataType: "json",
    data: {
      csrfmiddlewaretoken : d.getElementsByName('csrfmiddlewaretoken')[0].value
    },
    cache: false,
    success: function(data) {
        quizInfo(
          title = data.title,
          description = data.description,
          hsklevel = data.hsklevel,
          questions = JSON.parse(data.questions)
        )
    },
    error: function(xhr, status, error) {
        alert(error)
    }
});
}

function quizInfo(title, description, hsklevel, questions){
  const quizContainer = d.getElementById('quiz');
  const resultsContainer = d.getElementById('results');
  const submitButton = d.getElementById('submit');
  const myQuestions = questions
  
  d.getElementById('quizTitle').innerHTML = title;
  d.getElementById('quizDescription').innerHTML = description;
  d.getElementById('quizHskLevel').innerHTML = hsklevel;

 

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

      
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  
  buildQuiz();

  submitButton.onclick = function(){showResults()}
}

