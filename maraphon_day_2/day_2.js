const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend',dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}
function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}
function dragEnd(e) {
    e.target.classList.remove('hold', 'hide')

}

function dragover(e) {
    e.preventDefault()
}
function dragenter(e) {
    e.target.classList.add('hovered')
}
function dragleave(e) {
    e.target.classList.remove('hovered')

}
function dragdrop(e) {
    e.preventDefault()
    e.target.classList.remove('hovered')
    e.target.append(item)
}

