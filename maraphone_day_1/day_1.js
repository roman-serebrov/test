const data = [
    {img: 'https://images.unsplash.com/photo-1617609027443-1b9b47a0a8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', active: true},
    {img: 'https://images.unsplash.com/photo-1582196731372-4b50c92a3dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'},
    {img: 'https://images.unsplash.com/photo-1563988389518-8cd1c41c868d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
    {img: 'https://images.unsplash.com/photo-1603012947843-3aaabf418a61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'},
    {img: 'https://images.unsplash.com/photo-1580812597336-ac72d191170c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}
]

document.addEventListener('click',  (e) => {
    let node = document.querySelector('.active')
    if (e.target.className === 'slide') {
        clearActiveClasses(node)
        e.target.classList.add('active')
    }
})


function clearActiveClasses($elem) {
    $elem.classList.remove('active')
}


function renderSliders(data) {
   return data.map((item, index) => {
        return `
        <div
            class="${item.active ? 'slide active' : 'slide'}"
            style="
          background-image: url(${item.img});
        "
    >
        <h3>Припять ${index + 1}</h3>
    </div>`
    }).join('')
}

document.querySelector('.container').innerHTML = renderSliders(data)