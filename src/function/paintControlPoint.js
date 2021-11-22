export default function paintControlPoint(colorClass, num) {
  const points = document.querySelectorAll('.control-point');
  points[num].classList.add(`${colorClass}`);
}
