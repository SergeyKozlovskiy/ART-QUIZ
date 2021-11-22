export default function getLocalStorage(nameLocalStorage) {
  return JSON.parse(localStorage.getItem(`${nameLocalStorage}`));
}
