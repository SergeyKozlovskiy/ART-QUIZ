import mainPg from './pages/main-page/main-page';
import settingPg from './pages/settings-page/settings-page';
import rounds from './pages/rounds-page/rounds';
import pictureQuiz from './pages/pictureQuiz-page/pictureQuiz';
import show from './function/show';
import hide from './function/clearRoot';
import createLocalStorage from './function/createLocalStorage';
import artistQuiz from './pages/artistQuiz-page/artistQuiz';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let currentPage = 'mainPg';

  createLocalStorage();

  let renderPG = (page, param) => {
    page(param);
    setTimeout(show, 300, 'show');
  };
  renderPG(mainPg);

  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('settings')) {
      hide('show');
      setTimeout(() => {
        renderPG(settingPg);
      }, 400);
      currentPage = 'settingPg';
    } else if (
      (target.classList.contains('logo') ||
        target.classList.contains('setting-btn')) &&
      currentPage !== 'mainPg'
    ) {
      hide('show');
      setTimeout(() => {
        renderPG(mainPg);
      }, 400);
      currentPage = 'mainPg';
    } else if (target.classList.contains('PICTURES_QUIZ')) {
      hide('show');
      setTimeout(() => {
        renderPG(rounds, 'dataGamePictureQuiz');
      }, 400);
      currentPage = 'roundsPg';
    } else if (target.classList.contains('ARTISTS_QUIZ')) {
      hide('show');
      setTimeout(() => {
        renderPG(rounds, 'dataGameArtistQuiz');
      }, 400);
      currentPage = 'roundsPg';
    } else if (target.parentNode.classList.contains('PictureQuiz')) {
      let numRound = target.parentNode.getAttribute('num');
      hide('show');
      setTimeout(() => {
        renderPG(pictureQuiz, numRound);
      }, 400);
      currentPage = 'picturesPg';
    } else if (target.parentNode.classList.contains('ArtistQuiz')) {
      let numRound = target.parentNode.getAttribute('num');
      hide('show');
      setTimeout(() => {
        renderPG(artistQuiz, numRound);
      }, 400);
      currentPage = 'artistsPg';
    }
  });
});
