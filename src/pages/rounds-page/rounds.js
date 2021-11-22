import logo from '../../components/logo/logo';
import render from '../../function/render';
import subtitle from '../../components/subtitle/subtitle';
import RoundCard from '../../components/roundCards/roundCard';
import './rounds.css';
import getLocalStorage from '../../function/getLocalStorage';

let generateRoundCards = (nameLocalStorage) => {
  let flag = nameLocalStorage.replace('dataGame', '');
  const roundsBlock = document.querySelector('.rounds-block');
  const localData = getLocalStorage(nameLocalStorage);
  for (let i = 1; i < 13; i++) {
    let card = new RoundCard(
      `${i}`,
      `${localData[i].scoreLastGame}`,
      `${i - 1}.jpg`,
      flag
    );
    roundsBlock.insertAdjacentHTML('beforeend', `${card.createCard()}`);
    localData[i].answer = [];
    localData[i].result = 0;
  }
  localStorage.setItem(nameLocalStorage, JSON.stringify(localData));
};

export default function rounds(nameLocalStorage) {
  render(logo());
  render(subtitle('rounds'));
  root.insertAdjacentHTML(
    'beforeend',
    `<div class="container">
    <div class="rounds-block">
  </div>
  </div>`
  );
  generateRoundCards(nameLocalStorage);
}
