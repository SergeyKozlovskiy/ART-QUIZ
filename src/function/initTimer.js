import showResultArtistQuiz from '../pages/artistQuiz-page/artistQuiz';
import showResultPictureQuiz from '../pages/pictureQuiz-page/pictureQuiz';

export default function initTimer(elem, page) {
  let initCurrent = 3;
  let minute = initCurrent;
  let second = 0;
  let currentTime;
  elem.textContent = `${minute} : 00`;

  let timer = setInterval(() => {
    if (minute === 0 && second === 0) {
      clearTimeout(timer);
      if (page === 'pictureQuiz') {
        showResultPictureQuiz();
      } else {
        showResultArtistQuiz();
      }
      showResult();
    } else if (second === 0) {
      minute--;
      second = 60;
      second--;
      if (currentTime !== undefined) elem.textContent = currentTime;
    } else {
      elem.textContent = currentTime;
      second--;
    }

    if (String(second).length === 1) {
      currentTime = `${minute} : 0${second}`;
    } else {
      currentTime = `${minute} : ${second}`;
    }
  }, 1000);
  return timer;
}
