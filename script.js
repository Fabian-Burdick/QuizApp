let currentQuestion = 0;

function init() {
  document.getElementById('questionNumber').innerHTML = questions.length;
  renderQuestions();
}

function renderQuestions() {
  document.getElementById('questionPosition').innerHTML = currentQuestion + 1;
  resetAnswerButtons();

  let question = questions[currentQuestion];
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById('nextButton').disabled = true;
    renderQuestions();
  } else {
    document.getElementById('questiontext').innerHTML = 'Quiz beendet!';
    document.getElementById('nextButton').disabled = true;
  }
}

function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    let element = document.getElementById(`answer_${i}`);
    if (element) {
      element.parentNode.classList.remove('bg-success', 'bg-danger');
    }
  }
}
