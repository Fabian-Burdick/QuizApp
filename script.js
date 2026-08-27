let questions = [
  {
    question: 'Wer hat HTML erfunden?',
    answer_1: 'Robbie Williams',
    answer_2: 'Lady Gaga',
    answer_3: 'Tim Berners-Lee',
    answer_4: 'Justin Bieber',
    right_answer: 3,
  },

  {
    question: 'Wann entdeckte Christoph Kolumbus Amerika',
    answer_1: '1715',
    answer_2: '1492',
    answer_3: '1304',
    answer_4: '805BC',
    right_answer: 2,
  },

  {
    question: 'An welchem Datum fiel die Berliner Mauer?',
    answer_1: '1989',
    answer_2: '1970',
    answer_3: '2000',
    answer_4: '1955',
    right_answer: 1,
  },

  {
    question: 'Wie viele Oscars gewann der Film „Titanic“?',
    answer_1: '15',
    answer_2: '7',
    answer_3: '3',
    answer_4: '11',
    right_answer: 4,
  },

  {
    question: 'Was ist die Hauptstadt von Indien?',
    answer_1: 'Agra',
    answer_2: 'Nagpur',
    answer_3: 'Neu-Delhi',
    answer_4: 'Bangalore',
    right_answer: 3,
  },

  {
    question: 'Was ist die am häufigsten gesprochene Sprache in Brasilien?',
    answer_1: 'Spanisch',
    answer_2: 'Englisch',
    answer_3: 'Italienisch',
    answer_4: 'Portugiesisch',
    right_answer: 4,
  },
];

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
