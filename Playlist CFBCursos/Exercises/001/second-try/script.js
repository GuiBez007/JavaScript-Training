const boxes = [...document.querySelectorAll(`#box1, #box2`)]
const tecnologies = [...document.querySelectorAll(`#box1 > div`)]
const buttons = [...document.querySelectorAll(`#buttons > div`)]

tecnologies.map(x=>{
    x.addEventListener('click', ()=>{
        x.classList.toggle('selecionado')
    })
})


buttons[0].addEventListener('click', ()=>{
    trocarParaCaixaNumero(2)
})

buttons[1].addEventListener('click', ()=>{
    trocarParaCaixaNumero(1)
})


const trocarParaCaixaNumero = (n) => {
    tecnologies.forEach((tec)=>{
        if (tec.className == 'selecionado') {
            boxes[n-1].appendChild(tec)
            tec.classList.toggle('selecionado')
        }
    })
}