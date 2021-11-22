import controlPoints from '../../components/control-points/controlPoints';
import question from '../../components/question/question';
import checkRoundNum from '../../function/checkRoundNum';
import createArrAnswer from '../../function/createArrAnswer';
import getArrDataRound from '../../function/createArrDataRound';
import getImage from '../../function/getJSON';
import AnswersBtn from '../../components/answersBtn/answers';
import render from '../../function/render';
import artistQuizImg from '../../components/answer-artistQuiz/artistQuiz-img';
import paintControlPoint from '../../function/paintControlPoint';
import renderPG from '../../function/renderPG';
import resultPg from '../result-page/result-page';
import setLocalStorage from '../../function/setLocalStorage';
import clearRoot from '../../function/clearRoot';
import initTimer from '../../function/initTimer';
import getLocalStorage from '../../function/getLocalStorage';
import setScoreLastGame from '../../function/setScoreLastGame';
import modal from '../../components/modal/modal';
import mainPg from '../../pages/main-page/main-page';
import setTimeoutRenderPg from '../../function/setTimeoutRenderPg';
import sounds from '../../function/sounds';

let flagArtistQuizPage = false;
let numQuestions = 0;
let numberRound;
let arrDataRound;
let arrData;
let numFirstQuestions;
let rightAnswer;
let arrAnswer;
let answerTextBtn;
let timerId;
let settings;
let resultAnswer = 0;

const data = getImage();
data.then(
  (result) => (arrData = result),
  (error) => console.log(error)
);

export default function artistQuiz(numRound) {
  question('Кто автор этой картины', '');
  settings = getLocalStorage('settings');
  if (settings.timer) {
    let timer = document.querySelector('.currentTime');
    timerId = initTimer(timer, 'artistQuiz');
  }
  flagArtistQuizPage = true;
  numberRound = numRound;
  numFirstQuestions = checkRoundNum(numRound);
  arrDataRound = getArrDataRound(numFirstQuestions, arrData);
  rightAnswer = arrDataRound[numQuestions].author;
  arrAnswer = createArrAnswer(arrDataRound[numQuestions], arrData);
  answerTextBtn = arrAnswer.map((elem) => {
    return elem.author;
  });
  let btnBlock = new AnswersBtn(answerTextBtn);
  render(artistQuizImg(arrDataRound[numQuestions].imageNum));
  render(controlPoints());
  render(btnBlock.createAnswerBtn());
}

const upDateQustions = () => {
  const picture = document.querySelector(`.artistQuizImg `);
  const answers = document.querySelectorAll('.answer');
  arrAnswer = createArrAnswer(arrDataRound[numQuestions], arrData);
  rightAnswer = arrDataRound[numQuestions].author;

  picture.classList.remove('show');
  setTimeout(() => {
    picture.setAttribute(
      'src',
      `./images/img/${arrDataRound[numQuestions].imageNum}.jpg`
    );
    picture.classList.add('show');
  }, 300);

  answers.forEach((el, i) => {
    el.textContent = `${arrAnswer[i].author}`;
  });
};

document.addEventListener('click', (event) => {
  let target = event.target;
  if (
    target.classList.contains('answer') &&
    flagArtistQuizPage === true &&
    target.textContent === rightAnswer
  ) {
    if (numQuestions !== 9) {
      sounds().right.play();
      setLocalStorage('dataGameArtistQuiz', numberRound, true, 1);
      paintControlPoint('right-answer', numQuestions);
      numQuestions++;
      resultAnswer += 1;
      upDateQustions();
    } else {
      sounds().result.play();
      showModal();
    }
  } else if (
    target.classList.contains('answer') &&
    flagArtistQuizPage === true &&
    target.textContent !== rightAnswer
  ) {
    if (numQuestions !== 9) {
      sounds().wrong.play();
      setLocalStorage('dataGameArtistQuiz', numberRound, false, 0);
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
    showResultArtistQuiz();
  });
};

export function showResultArtistQuiz() {
  setScoreLastGame('dataGameArtistQuiz', numberRound);
  clearTimeout(timerId);
  numQuestions = 0;
  resultAnswer = 0;
  flagArtistQuizPage = false;
  clearRoot('show');
  setTimeout(
    renderPG,
    400,
    resultPg,
    arrDataRound,
    numberRound,
    'dataGameArtistQuiz'
  );
}

document.addEventListener('click', (event) => {
  let target = event.target;
  if (
    target.classList.contains('question-header_logo') &&
    flagArtistQuizPage === true
  ) {
    resultAnswer = 0;
    numQuestions = 0;
    flagArtistQuizPage = false;
    clearRoot('show');
    setTimeoutRenderPg(mainPg);
  }
});
