import './button.css';
export default function button(className, text) {
  return `<div class="box animateElem">
            <div class="${className} btn">${text}</div>
          </div>`;
}
