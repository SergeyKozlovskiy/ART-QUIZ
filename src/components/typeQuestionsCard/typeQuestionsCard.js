import './typeQuestionsCard.css';
export default function typeQuestionsCard(className, img, text) {
  return `<div class="cardQustion animateElem">
            <img class="${className} cardQustion_img" src="./images/main-pg/${img}" alt="${img}">
            <p class="cardQustion_text">${text}</p>
          </div>`;
}
