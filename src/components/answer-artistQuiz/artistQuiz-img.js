import './artistQuizImg.css';
export default function artistQuizImg(num) {
  return `<div class = "container">
            <div class="wrapper-img">
                <img class="artistQuizImg animateElem" src="./images/img/${num}.jpg" alt="img">
            </div>
        </div>`;
}
