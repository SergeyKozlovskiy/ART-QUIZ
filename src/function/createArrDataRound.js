export default function getArrDataRound(numFirstQuestions, data) {
  let arr = [];
  let min = numFirstQuestions - 1;
  let max = min + 10;
  for (let i = min; i < max; i++) {
    arr.push(data[i]);
  }
  return arr;
}
