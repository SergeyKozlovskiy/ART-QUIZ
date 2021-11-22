export default function changeTimer(params) {
  const checkbox = document.getElementById('timerCheckBox');
  checkbox.addEventListener('change', () => {
    let data = JSON.parse(localStorage.getItem('settings'));
    data.timer = checkbox.checked;
    localStorage.setItem('settings', JSON.stringify(data));
  });
}
