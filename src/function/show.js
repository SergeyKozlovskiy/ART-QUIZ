export default function show(animationClass) {
  const animateElem = document.querySelectorAll('.animateElem');
  animateElem.forEach((el, i) => {
    let delay = i * 15;
    el.style.transitionDelay = `${delay}ms`;
    el.classList.add(`${animationClass}`);
  });
}
