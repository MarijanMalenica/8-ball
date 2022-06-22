function randomAnswer() {
    const answers = [
      "Possibly", "Maybe", "No", "for sure", "Don't ask me bro"
    ];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    return randomAnswer;
}

const buttonSelector = document.getElementById("confirm-button")
const inputSelector = document.getElementById("question-input");
const answerSelector = document.getElementById("eight-ball-answer")

function checkForText() {
  if(inputSelector.value === "") { 
           buttonSelector.disabled = true; 
       } else { 
           buttonSelector.disabled = false;
       }
   }

buttonSelector.onclick = function buttonClick() {
    console.log("click", randomAnswer())
    answerSelector.innerHTML = randomAnswer();
    inputSelector.value = "";
    checkForText();
}

