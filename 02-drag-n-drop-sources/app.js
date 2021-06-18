const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //находимся над местом куда можно поместить элемент
    placeholder.addEventListener('dragenter', dragenter)//при перетягивании элемент входит в место куда можно поместить его
    placeholder.addEventListener('dragleave', dragleave)// элемент покидает место
    placeholder.addEventListener('drop', dragdrop)// отпускаем мышку конец перетягивания
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0) //если без таймаута то элемент сразу исчезает

}


function dragend(event) {
    event.target.classList.remove('hold', 'hide')//можно удалять сразу несколько классов
    // event.target.className='item' //2й способ он зхатирает все класы записывая новый
}

function dragover(event) {
    event.preventDefault() //отменяем запрет на перетаскивание элемента в другое место
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}