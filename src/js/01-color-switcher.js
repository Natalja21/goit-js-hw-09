const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
console.log(startBtnRef);
console.log(stopBtnRef);
let timerId = null;

// генерування випадкового кольору

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const onChangeBg = () => {
  timerId = setInterval(
    () => (bodyRef.style.background = getRandomHexColor()),
    1000
  );
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
};

const stopChangeBg = () => {
  clearInterval(timerId);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
};

startBtnRef.addEventListener('click', onChangeBg);
stopBtnRef.addEventListener('click', stopChangeBg);
