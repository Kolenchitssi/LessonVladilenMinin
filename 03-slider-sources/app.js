const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidecount = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(slidecount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidecount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidecount - 1;
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    // mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`//2й вариант так тоже работает но тут самому надо знать vh на который смещать в данном случае блок на весь экран тоесть 100vh

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`


}