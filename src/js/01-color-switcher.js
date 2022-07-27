
const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;

// генерування випадкового кольору
const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// кнопка старт для зміни background
const onChangeBg = () => {
    timerId = setInterval(
        () => (bodyRef.style.background = getRandomHexColor()),
        1000
    );
    startBtnRef.disabled = true;
    stopBtnRef.disabled = false;
};

// кнопка stop
const stopChangeBg = () => {
    clearInterval(timerId);
    startBtnRef.disabled = false;
    stopBtnRef.disabled = true;
};

//  addEventListener
startBtnRef.addEventListener('click', onChangeBg);
stopBtnRef.addEventListener('click', stopChangeBg);

