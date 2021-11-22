import './settingCard.css';
export default function settingCard(
  icon,
  typeInput,
  inputClass,
  inputId,
  header
) {
  return `<div class="settingCard cardQustion animateElem">
            <img class="settingCard_img" src="./images/settings/${icon}" alt="${icon}">
          <div class="input-block">
          <input id="${inputId}" class="${inputClass}" type="${typeInput}" max="100" min="0">
          <label for="${inputId}" data-on-label="On" data-off-label="Off"></label>
          </div>
            <p class="settingCard_text">${header}</p>
    </div>`;
}
