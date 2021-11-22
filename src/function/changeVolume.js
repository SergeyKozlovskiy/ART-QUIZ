export default function changeVolume(params) {
  const volume = document.getElementById('volumeInput');
  volume.addEventListener('change', () => {
    let data = JSON.parse(localStorage.getItem('settings'));
    data.volume = Number(volume.value);
    localStorage.setItem('settings', JSON.stringify(data));
  });
}
