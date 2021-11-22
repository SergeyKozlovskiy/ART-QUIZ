import './modal.css';
export default function modal(score, path) {
  return `  <div class="modal">
                <p class="modal-text">score<br>${score}/10</p>
                <img src="./images/madal/cup-icon.png" alt="img">
                <button class="modal-btn">next</button>
            </div>`;
}
