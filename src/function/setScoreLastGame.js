import getLocalStorage from './getLocalStorage';

export default function setScoreLastGame(nameLocalStorage, numberRound) {
  let data = getLocalStorage(nameLocalStorage);
  data[numberRound].scoreLastGame = data[numberRound].result;
  localStorage.setItem(nameLocalStorage, JSON.stringify(data));
}
