import './answers.css';

export default class AnswerBtn {
  constructor(answers) {
    this.answers = answers;
  }
  createAnswerBtn() {
    return `<div class="container">
    <div class="answers">
        <div class="box animateElem">
          <div class="btn answer">${this.answers[0]}</div>
        </div>
        <div class="box animateElem">
          <div class="btn answer">${this.answers[1]}</div>
        </div>
        <div class="box animateElem">
          <div class="btn answer">${this.answers[2]}</div>
        </div>
        <div class="box animateElem">
          <div class="btn answer">${this.answers[3]}</div>
        </div>
    </div>
</div>`;
  }
}

{
  /* <div class="answer animateElem">${this.answers[0].name}</div>
<div class="answer animateElem">${this.answers[1].name}</div>
<div class="answer animateElem">${this.answers[2].name}</div>
<div class="answer animateElem">${this.answers[3].name}</div> */
}
