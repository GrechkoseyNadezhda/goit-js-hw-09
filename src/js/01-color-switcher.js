const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let timerId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', onChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
}
function onStopChangeColor() {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
