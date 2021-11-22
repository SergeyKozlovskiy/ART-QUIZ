import logo from '../../components/logo/logo';
import './main-page.css';
import typeQuestionsCard from '../../components/typeQuestionsCard/typeQuestionsCard';
import render from '../../function/render';
import button from '../../components/button/button';
import modal from '../../components/modal/modal';
const root = document.getElementById('root');

export default function renderMainPg() {
  render(logo());
  root.insertAdjacentHTML(
    'beforeend',
    `<div class ="container">
        <div class="wrapper">${typeQuestionsCard(
          'PICTURES_QUIZ',
          'pictures.jpg',
          'PICTURES  QUIZ'
        )}
          ${typeQuestionsCard('ARTISTS_QUIZ', 'artist.jpg', 'ARTISTS  QUIZ')}
        </div>
    </div>`
  );
  root.insertAdjacentHTML(
    'beforeend',
    `<div class = "container">
    ${button('settings', 'settings')}
    </div>`
  );
}
