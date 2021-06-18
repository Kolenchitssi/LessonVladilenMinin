const board = document.querySelector('#board');
const colors = ['#8390cc', '#f3d75b', '#5b77f3', '#5bbbf3', '#d498db', '#5bf3a7', '#5bf36f', '#93f35b', '#f3f05b']
const SQUARE_NUMBER = 240;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor((Math.random() * colors.length));
    return colors[index];

}