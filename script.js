let rightQuestions = 0;
let currentQuestion = 0;
let audioRight = new Audio('audio/right.mp3');
let audioWrong = new Audio('audio/wrong.mp3');
let audioFinish = new Audio('audio/finished.mp3');

function init() {
  document.getElementById('questionNumber').innerHTML = questions.length;
  showQuestions();
}

function showQuestions() {
  document.getElementById('questionPosition').innerHTML = currentQuestion + 1;
  resetAnswerButtons();
  updateProgressBar();
  renderQuestionsAndAnswers();
}

function renderQuestionsAndAnswers() {
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
    audioRight.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    audioWrong.play();
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById('nextButton').disabled = true;
    showQuestions();
  } else {
    quizFinished();
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

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById('progressBar').innerHTML = `${percent}%`;
  document.getElementById('progressBar').style.width = `${percent}%`;
}

function quizFinished() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display:none';
  audioFinish.play();
  document.getElementById('questionNumberEnd').innerHTML = questions.length;
  document.getElementById('rightQuestionNumber').innerHTML = rightQuestions;
}

function restartGame() {
  document.getElementById('questionBody').style = '';
  document.getElementById('endScreen').style = 'display:none';
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
