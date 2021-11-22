import logo from '../../components/logo/logo';
import ResultCard from '../../components/resultCardPictureQuiz/resultCard';
import score from '../../components/score/score';
import subtitle from '../../components/subtitle/subtitle';
import getLocalStorage from '../../function/getLocalStorage';
import render from '../../function/render';
import './resultPg.css';

let generateResultCard = (
  arrRoundData,
  numRound,
  localData,
  nameLocalStorage
) => {
  const resultBlock = document.querySelector('.results');
  for (let i = 0; i < 10; i++) {
    let card = new ResultCard(
      arrRoundData[i].imageNum,
      localData[numRound].answer[i],
      arrRoundData[i].author,
      arrRoundData[i].name,
      arrRoundData[i].year
    );
    resultBlock.insertAdjacentHTML('beforeend', `${card.createCard()}`);
  }
};

export default function resultPg(arrRoundData, numRound, nameLocalStorage) {
  let localData = getLocalStorage(`${nameLocalStorage}`);
  render(logo());
  render(subtitle('score'));
  root.insertAdjacentHTML(
    'beforeend',
    `<div class="container">
    <div class="results">
  </div>
  </div>`
  );
  generateResultCard(arrRoundData, numRound, localData, nameLocalStorage);
  render(score(localData[numRound].result));
}

document.addEventListener('click', (event) => {
  let target = event.target;
  if (target.classList.contains('results-card__img')) {
    target.nextSibling.classList.toggle('show_info');
  }
});
