import logo from '../../components/logo/logo';
import render from '../../function/render';
import settingCard from '../../components/settingCard/settingCard';
import button from '../../components/button/button';
import subtitle from '../../components/subtitle/subtitle';
import './setting-page.css';
import changeTimer from '../../function/changeTimer';
import setSettingTimer from '../../function/setSettingTimer';
import changeVolume from '../../function/changeVolume';
import setSettingVolume from '../../function/setSettingVolume';

export default function settingsPage(params) {
  render(logo());
  render(subtitle('settings'));
  root.insertAdjacentHTML(
    'beforeend',
    `<div class="container">
      <div class="wrapper setting-block">
        ${settingCard(
          'volume.svg',
          'range',
          'inputVolume',
          'volumeInput',
          'volume'
        )}
        ${settingCard(
          'timer.svg',
          'checkbox',
          'inputTimer',
          'timerCheckBox',
          'timer'
        )}
      </div>
    </div>`
  );
  root.insertAdjacentHTML(
    'beforeend',
    `<div class="container">
      ${button('setting-btn', 'save')}
    </div>`
  );
  setSettingTimer();
  setSettingVolume();
  changeTimer();
  changeVolume();
}
