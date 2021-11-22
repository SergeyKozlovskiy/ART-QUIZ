export default function getSettingTimer(params) {
  const checkbox = document.getElementById('timerCheckBox');
  let data = JSON.parse(localStorage.getItem('settings'));
  if (data.timer === true) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}
