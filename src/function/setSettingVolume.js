export default function setSettingVolume(params) {
  const volume = document.getElementById('volumeInput');
  let data = JSON.parse(localStorage.getItem('settings'));
  volume.value = data.volume;
}
