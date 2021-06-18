const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#8390cc', '#f3d75b', '#5b77f3', '#5bbbf3', '#d498db', '#5bf3a7', '#5bf36f', '#93f35b', '#f3f05b'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = +event.target.getAttribute('data-time');
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();//удаляет кружок
        createRandomCercle();//создаем новый
    }
})


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCercle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.remove() //удаляем ролителя timeEl тоесть счет
    //или timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1> Ваш счет: <span class="primary">${score}</span></h1>`
}
function createRandomCercle() {
    const circle = document.createElement('div');
    const size = getRandomNamber(10, 60);
    const { width, height } = board.getBoundingClientRect()

    const x = getRandomNamber(0, width - size);
    const y = getRandomNamber(0, height - size);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    const newColor = getRandomNamber(0, colors.length - 1);
    circle.style.backgroundColor = colors[newColor];

    circle.classList.add('circle');
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    board.append(circle);
}
function getRandomNamber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}