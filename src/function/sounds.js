import getLocalStorage from './getLocalStorage';

export default function sounds() {
  let data = getLocalStorage('settings');

  const sounds = {
    right: new Audio('./sounds/right.mp3'),
    wrong: new Audio('./sounds/wrong.mp3'),
    result: new Audio('./sounds/result.mp3'),
  };

  for (let key in sounds) {
    sounds[key].volume = data.volume / 100;
  }

  return sounds;
}
