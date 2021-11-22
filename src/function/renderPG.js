import show from './show';

export default function renderPG(page, param, param2, param3) {
  page(param, param2, param3);
  setTimeout(show, 300, 'show');
}
