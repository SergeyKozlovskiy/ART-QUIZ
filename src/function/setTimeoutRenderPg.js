import renderPG from './renderPG';
export default (page, param) => {
  return setTimeout(() => {
    renderPG(page, param);
  }, 400);
};
