export default function clearRoot(animationClass) {
  const animateElem = document.querySelectorAll('.animateElem');
  animateElem.forEach((el) => {
    el.classList.remove(`${animationClass}`);
  });

  setTimeout(() => {
    root.innerHTML = '';
  }, 300);
}
