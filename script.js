const colorChangeBtn = document.querySelector(".btn");
const body = document.body;

function randomColorRate(min = 0, max = 255) {
  if (max === 1) {
    return +(Math.random() * (max - min) + min).toFixed(1);
  }
  return Math.floor(Math.random() * (max - min) + min);
}

function changeColor() {
  const rate1 = randomColorRate();
  const rate2 = randomColorRate();
  const rate3 = randomColorRate();
  const rate4 = randomColorRate(0, 1);
  body.style.backgroundColor = `rgb(${rate1}, ${rate2}, ${rate3}, ${rate4})`;
}

colorChangeBtn.addEventListener("click", changeColor);
