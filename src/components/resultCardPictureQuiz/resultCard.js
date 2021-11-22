import './ResultCard.css';
export default class ResultCard {
  constructor(pathImg, answer, author, name, year) {
    this.pathImg = pathImg;
    this.answer = answer;
    this.author = author;
    this.name = name;
    this.year = year;
  }
  createCard() {
    if (this.answer) {
      return `<div class="results-card">
          <img class="results-card__img color-img" src="./images/img/${this.pathImg}.jpg" alt="img" ><div class="info">
              <p>${this.author}</p>
              <p>${this.name}</p>
              <p>${this.year}</p>
          </div>
      </div>`;
    } else {
      return `<div class="results-card">
          <img class="results-card__img" src="./images/img/${this.pathImg}.jpg" alt="img" ><div class="info">
              <p>${this.author}</p>
              <p>${this.name}</p>
              <p>${this.year}</p>
          </div>
      </div>`;
    }
  }
}
