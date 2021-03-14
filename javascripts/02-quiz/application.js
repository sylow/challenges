const questions = [
    { id: 1,
      question: 'Who is the founder of modern Turkey?',
      correct: 1,
      choices: [    {id: 1, choice: 'Mustafa Kemal Atatürk'}, 
                    {id: 2, choice: 'Ismet Inonu'}, 
                    {id: 3, choice: 'Marasal Fevzi Cakmak'}, 
                    {id: 4, choice: 'Yaver'}
                ]        
    },
    { id: 2,
      question: 'What is the capital of Turkey?',
      correct: 1,
      choices: [    {id: 1, choice: 'Ankara'}, 
                    {id: 2, choice: 'Istanbul'}, 
                    {id: 3, choice: 'Izmir'}, 
                    {id: 4, choice: 'Antalya'}
                ]        
    },
    { id: 3,
      question: 'How much did Peter Minuit pay for Manhattan in 1826?',
      correct: 1,
      choices: [    {id: 1, choice: '$24'}, 
                    {id: 2, choice: '$112'}, 
                    {id: 3, choice: '$1,000'}, 
                    {id: 4, choice: '$87'}
                ]        
    },

];

function getNextQuestion(){
    questionIndex = questions.findIndex(item => item.id === showQuestionIndex);
    question = questions[questionIndex];
    showQuestionAndChoices();
}
function showQuestionAndChoices(){
    document.getElementById('question').innerText = question.question;
    document.getElementById('choices').innerHTML = '';
    question.choices.forEach(function(item){
        document.getElementById('choices').innerHTML += `<div class="choice"><label>
        <input type="radio" name="choice" onclick='selectRadio(this)' question='${question.id}' value='${item.id}'>${item.choice}
        </label>
    </div>`
    })
}

function selectRadio(el){
    choices[el.getAttribute('question')] = parseInt(el.value);
}

function nextQuestion(){
    if (showQuestionIndex >= questions.length){
        document.getElementById('next-question').innerText = 'Your score: ' + showResults() + '  out of ' + questions.length;
    }
    if (showQuestionIndex < questions.length){
        showQuestionIndex++;
        getNextQuestion()
    }
    
}

function showResults(){
    result = 0;
    questions.forEach(function(item){
        result += choices[item.id] === item.correct ? 1 : 0;
    })
    return result;
}
// Initializations
var showQuestionIndex = 1;
var choices = {};
var question = '';

