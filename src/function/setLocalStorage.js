import getLocalStorage from './getLocalStorage';
export default function setLocalStorage(
  nameLocalStorage,
  key,
  boolean,
  resultAnswer
) {
  let data = getLocalStorage(nameLocalStorage);
  data[key].answer.push(boolean);
  data[key].result += resultAnswer;
  localStorage.setItem(nameLocalStorage, JSON.stringify(data));
}
