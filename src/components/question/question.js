import './question.css';

export default function question(question, artist) {
  root.insertAdjacentHTML(
    'beforeend',
    `<div class= "container">
      <div class="question-header">
              <img class="question-header_logo" src="./images/main-pg/logo/logo.png" alt="logo">
              <p class="question">${question} <span id="author">${artist}</span>?</p>
              <div class="timer">
                  <img src="./images/settings/timer.svg" alt="timer">
                  <p class="currentTime">OFF</p>
              </div>
      </div>
      </div>`
  );
}
