export default function render(params) {
  return root.insertAdjacentHTML('beforeend', `${params}`);
}
