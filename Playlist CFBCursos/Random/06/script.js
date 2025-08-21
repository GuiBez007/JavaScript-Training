const criarElemento = (tipo) => {
    return document.createElement(tipo)
}

// Criação da caixa principal
const box = criarElemento("div")
box.setAttribute("id", "box1")
document.querySelector('main').appendChild(box)

const criacoes = ['HTML', 'CSS', 'Java Script', 'React', 'Python']

// Criação dos filhos da caixa principal
criacoes.map((c) => {
    let elemento = criarElemento('div')
    console.log(elemento)
    elemento.innerText = c
    box.appendChild(elemento)

    elemento.addEventListener('click', (evt) => {
        console.log(evt.target)
        elemento.parentElement.removeChild(evt.target)
    })
})

