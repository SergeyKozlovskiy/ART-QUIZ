import render from '../../function/render';
import question from '../../components/question/question';
import './pictureQuiz.css';
import Answers from '../../components/answers-pictureQuiz/answers';
import AnswersBtn from '../../components/answersBtn/answers';
import getImage from '../../function/getJSON';
import checkRoundNum from '../../function/checkRoundNum';
import getArrDataRound from '../../function/createArrDataRound';
import createArrAnswer from '../../function/createArrAnswer';
import controlPoints from '../../components/control-points/controlPoints';
import paintControlPoint from '../../function/paintControlPoint';
import setLocalStorage from '../../function/setLocalStorage';
import clearRoot from '../../function/clearRoot';
import renderPG from '../../function/renderPG';
import resultPg from '../result-page/result-page';
import initTimer from '../../function/initTimer';
import getLocalStorage from '../../function/getLocalStorage';
import sounds from '../../function/sounds';
import setScoreLastGame from '../../function/setScoreLastGame';
import modal from '../../components/modal/modal';
import mainPg from '../../pages/main-page/main-page';
import setTimeoutRenderPg from '../../function/setTimeoutRenderPg';

let flagPictureQuizPage = false;
let numFirstQuestions;
let arrData;
let arrDataRound;
let numQuestions = 0;
let arrAnswer;
let rightAnswer;
let numberRound;
let answerTextBtn;
let timerId;
let settings;
let resultAnswer = 0;

const data = getImage();
data.then(
  (result) => (arrData = result),
  (error) => console.log(error)
);

export default function pictureOuiz(numRound) {
  settings = getLocalStorage('settings');
  flagPictureQuizPage = true;
  numberRound = numRound;
  numFirstQuestions = checkRoundNum(numRound);
  arrDataRound = getArrDataRound(numFirstQuestions, arrData);
  arrAnswer = createArrAnswer(arrDataRound[numQuestions], arrData);
  rightAnswer = arrDataRound[numQuestions].name;

  question('Какую из картин написал', arrDataRound[numQuestions].author);
  answerTextBtn = arrAnswer.map((elem) => {
    return elem.name;
  });
  let picturesBlock = new Answers(arrAnswer);
  let btnBlock = new AnswersBtn(answerTextBtn);
  render(picturesBlock.createPictures());
  render(controlPoints());
  render(btnBlock.createAnswerBtn());
  if (settings.timer) {
    let timer = document.querySelector('.currentTime');
    timerId = initTimer(timer, 'pictureQuiz');
  }
}

const upDateQustions = () => {
  const pictures = document.querySelectorAll(`.pictures-block>img`);
  const answers = document.querySelectorAll('.answer');
  const author = document.getElementById('author');
  arrAnswer = createArrAnswer(arrDataRound[numQuestions], arrData);
  rightAnswer = arrDataRound[numQuestions].name;
  author.textContent = `${arrDataRound[numQuestions].author}`;
  pictures.forEach((el, i) => {
    el.classList.remove('show');
    setTimeout(() => {
      el.setAttribute('src', `./images/img/${arrAnswer[i].imageNum}.jpg`);
      el.classList.add('show');
    }, 300);
  });
  answers.forEach((el, i) => {
    el.textContent = `${arrAnswer[i].name}`;
  });
};

document.addEventListener('click', (event) => {
  let target = event.target;
  if (
    target.classList.contains('answer') &&
    flagPictureQuizPage === true &&
    target.textContent === rightAnswer
  ) {
    if (numQuestions !== 9) {
      sounds().right.play();
      resultAnswer += 1;
      setLocalStorage('dataGamePictureQuiz', numberRound, true, 1);
      paintControlPoint('right-answer', numQuestions);
      numQuestions++;
      upDateQustions();
    } else {
      sounds().result.play();
      showModal();
    }
  } else if (
    target.classList.contains('answer') &&
    flagPictureQuizPage === true &&
    target.textContent !== rightAnswer
  ) {
    if (numQuestions !== 9) {
      sounds().wrong.play();
      setLocalStorage('dataGamePictureQuiz', numberRound, false, 0);
      paintControlPoint('wrong-answer', numQuestions);
      numQuestions++;
      upDateQustions();
    } else {
      sounds().result.play();
      showModal();
    }
  }
});

const showModal = () => {
  render(modal(resultAnswer));
  setTimeout(() => {
    let modal = document.querySelector('.modal');
    modal.classList.add('show-modal');
  }, 300);
  let btn = document.querySelector('.modal-btn');
  btn.addEventListener('click', () => {
    showResultPictureQuiz();
  });
};

export function showResultPictureQuiz() {
  setScoreLastGame('dataGamePictureQuiz', numberRound);
  clearTimeout(timerId);
  resultAnswer = 0;
  numQuestions = 0;
  flagPictureQuizPage = false;
  clearRoot('show');
  setTimeout(
    renderPG,
    400,
    resultPg,
    arrDataRound,
    numberRound,
    'dataGamePictureQuiz'
  );
}
document.addEventListener('click', (event) => {
  let target = event.target;
  if (
    target.classList.contains('question-header_logo') &&
    flagPictureQuizPage === true
  ) {
    resultAnswer = 0;
    numQuestions = 0;
    flagPictureQuizPage = false;
    clearRoot('show');
    setTimeoutRenderPg(mainPg);
  }
});
