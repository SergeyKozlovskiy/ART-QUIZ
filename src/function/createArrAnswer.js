export default function createArrAnswer(rightAnswer, data) {
  let arrAnswer = [];
  arrAnswer.push(rightAnswer);
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 3; i++) {
    let randomAnswer = data[getRandomInRange(0, 240)];
    if (rightAnswer.imageNum !== randomAnswer.imageNum) {
      arrAnswer.push(randomAnswer);
    } else {
      --i;
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return shuffle(arrAnswer);
}
