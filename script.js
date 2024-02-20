const rains = document.querySelectorAll('.rain');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

rains.forEach(rain => {
    rain.style.left = `${getRandomNumber(0, 100)}vw`;
    rain.style.animationDelay = `-${getRandomNumber(0, 5000)}ms`;
});