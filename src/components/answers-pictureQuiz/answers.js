import './answers.css';
export default class Answers {
  constructor(answers) {
    this.answers = answers;
    this.path = `https://github.com/SergeyKozlovskiy/ART-QUIZ/blob/master/img/${this.answers[0].imageNum}.jpg`;
  }
  createPictures() {
    return `<div class="container">
    <div class="pictures-block">
        <img class="animateElem" src="./images/img/${this.answers[0].imageNum}.jpg" alt="img">
        <img class="animateElem" src="./images/img/${this.answers[1].imageNum}.jpg" alt="img">
        <img class="animateElem" src="./images/img/${this.answers[2].imageNum}.jpg" alt="img">
        <img class="animateElem" src="./images/img/${this.answers[3].imageNum}.jpg" alt="img">
        </div>
    </div>`;
  }
}
