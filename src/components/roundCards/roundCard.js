import './roundCard.css';

export default class RoundCard {
  constructor(num, result, imgName, flag) {
    this.num = num;
    this.result = result;
    this.imgName = imgName;
    this.flag = flag;
  }
  createCard() {
    if (this.result !== '0') {
      return `
          <div class="card ${this.flag} animateElem" num="${this.num}">
                  <div class="cardNum">${this.num}<span>Round</span></div>
                  <span class="cardCounter">${this.result} / 10</span>
                  <img class="cardImg" src="./images/img/${this.imgName}"  alt="cardImg">
          </div>`;
    } else {
      return `
          <div class="card ${this.flag} animateElem" num="${this.num}">
              <div class="card-filter"></div>
                  <div class="cardNum">${this.num}<span>Round</span></div>
                  <span class="cardCounter">${this.result} / 10</span>
                  <img class="cardImg" src="./images/img/${this.imgName}"  alt="cardImg">
          </div>`;
    }
  }
}
