
function saveQuiz(flag){
    flag1 = flag2 = flag3 = flag4 = 0;
    var quest = document.getElementsByClassName('questions');
    var questionValue = 0;
    var question_JSON =  [];
    if(document.getElementById('title').value.length == 0){
        document.getElementById('titleErrorMessage').innerHTML = "*This field cannot be empty.";
        setTimeout(function(){document.getElementById('titleErrorMessage').innerHTML = ""}, 4000);
      }
      else{
        flag1 = 1;
      }
    if(document.getElementById('level').value.length == 0){
        document.getElementById('levelErrorMessage').innerHTML = "*This field cannot be empty.";
        setTimeout(function(){document.getElementById('levelErrorMessage').innerHTML = ""}, 4000);
        
      }
      else{
        flag4 = 1;
      }

   
    if(document.getElementById('description').value.length == 0){
        document.getElementById('descriptionErrorMessage').innerHTML = "*This field cannot be empty.";
        setTimeout(function(){document.getElementById('descriptionErrorMessage').innerHTML = ""}, 4000);
      }
      else{
        flag2 = 1;
      }
    
    for(let i  = 0; i < quest.length; i++){
      if(document.getElementsByClassName('question-type')[i].textContent === "Multiple Choice"){
       
            if(
          document.getElementsByClassName('question')[i].value.length === 0 || 
          document.getElementById('answer'+(i+1)).value.length === 0 ||
          document.getElementById('letter_a'+(i+1)).value.length === 0 ||
          document.getElementById('letter_b'+(i+1)).value.length === 0 ||
          document.getElementById('letter_c'+(i+1)).value.length === 0 ||
          document.getElementById('letter_d'+(i+1)).value.length === 0
          ){
          
          document.getElementsByClassName('errorMessageQuestion')[i].innerHTML = "*Please complete the following fields.";
          setTimeout(function(){document.getElementsByClassName('errorMessageQuestion')[i].innerHTML = ""}, 4000);
        
          }else{
            questionValue+=1;
          }
      }
    }
    if(questionValue >= 0 && questionValue === quest.length){
      flag3 = 1;
    }
    totalPoints = 0;
    if(flag1 == 1 && flag2 == 1 && flag3 ==1 && flag4 == 1){
      for(let i = 0; i < quest.length; i++) {
        if(document.getElementsByClassName('question-type')[i].textContent == "Multiple Choice"){
          question_JSON.push({
          id : parseInt(i+1),
          type : "MC",
          question : document.getElementsByClassName('question')[i].value,
          answers : {
            a : document.getElementById('letter_a'+(i+1)).value,
            b : document.getElementById('letter_b'+(i+1)).value,
            c : document.getElementById('letter_c'+(i+1)).value,
            d : document.getElementById('letter_d'+(i+1)).value,
          },
          correctAnswer: document.getElementById('answer'+(i+1)).value,
          
         });
        }
        }

        console.log(JSON.stringify(question_JSON))

        createOrUpdateQuiz(
        document.getElementById('title').value,
        document.getElementById('description').value,
        document.getElementById('level').value,
        JSON.stringify(question_JSON),
        flag
        )
    }
}


function createOrUpdateQuiz(title, description,level, questions, flag){
$.ajax({
    type: "post",
    url: window.location.href,
    data: {
  title : title,
  description : description,
  level: level,
  questions : questions,
  csrfmiddlewaretoken : document.getElementsByName('csrfmiddlewaretoken')[0].value,
    },
    cache: false,
    success: function(data) {
        if (flag==1){
        alert("Mock Test has been created");
            window.location.href = "/mocktest/"
        }else if(flag==2){
        alert("Mock Test has been saved");
            window.location.reload();
        }
        
    },
    error: function(xhr, status, error) {
        alert("Server Error 500!")
    }
});
}
// to be separated
function removeQuestion(){
if(document.getElementsByClassName('question-number').length <=1){
  return
}
document.getElementById("main-questions").lastElementChild.remove();
}
function removeQuestion2(questionId){
document.getElementById(questionId).remove();


var quest = document.getElementsByClassName('questions');

for(let i = 1; i < quest.length+1; i++) {


if(document.getElementsByClassName('question-type')[i-1].textContent == "Multiple Choice"){
 num = document.getElementsByClassName('question-number')[i].innerText
 document.getElementById('answer'+(num)).id = `answer${i}` ; 
 document.getElementById('letter_a'+(num)).id = `letter_a${i}` ;
 document.getElementById('letter_b'+(num)).id = `letter_b${i}` ;
 document.getElementById('letter_c'+(num)).id = `letter_c${i}` ;
 document.getElementById('letter_d'+(num)).id = `letter_d${i}` ;

}

document.getElementsByClassName('question-number')[i].innerHTML = i;
document.getElementsByClassName('questions')[i-1].id = `questions${i}`;
document.getElementsByClassName('removeQuestionBtn')[i-1].setAttribute('onclick',`removeQuestion2('questions${i}')`);
}


}


function addMultipleChoice2(){
  $('html,body').animate({ scrollTop: 9999 }, 'slow');

current_question_number = document.getElementsByClassName('question-number');
current_question_number = current_question_number[current_question_number.length - 1].textContent;

multipleChoice = `
<div class="questions" id="questions${parseInt(current_question_number) + 1}"><button class="removeQuestionBtn" onclick='removeQuestion2("questions${parseInt(current_question_number) + 1}")'>X</button><p class="question-number">${parseInt(current_question_number) + 1}</p><small class="question-type">Multiple Choice</small><hr><label class="questionAnswerLabel">Question:</label><input type="text" class="question" placeholder="Question"><br><br><label class="questionAnswerLabel">Correct Answer:</label><input type="text" class="answer" id="answer${parseInt(current_question_number) + 1}" placeholder="Correct Answer"><br><br><label class="labelOptions">A:</label><input type="text" class="letter_a" id="letter_a${parseInt(current_question_number) + 1}" placeholder="Option A" style="margin-left:-3rem;"><label class="labelOptions">B:</label><input type="text" class="letter_b" id="letter_b${parseInt(current_question_number) + 1}" placeholder="Option B" style="margin-left:-3rem;"><br><br><label class="labelOptions">C:</label><input type="text" class="letter_c" id="letter_c${parseInt(current_question_number) + 1}" placeholder="Option C" style="margin-left:-3rem;"><label class="labelOptions">D:</label><input type="text" class="letter_d" id="letter_d${parseInt(current_question_number) + 1}" placeholder="Option D" style="margin-left:-3rem;"><p class="errorMessageQuestion"></p></div>
`
document.getElementById("main-questions").innerHTML += multipleChoice
}

