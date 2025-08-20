let divs = document.querySelectorAll('#div-geral > div')
const switch_right_button = document.getElementById('button')
const switch_left_button = document.getElementById('button2')

const main_divs = [ // Com bordas pretas
    document.querySelectorAll('main > div')[0],
    document.querySelectorAll('main > div')[2]
]

// Divs disponíveis
let divs_direita = []//Array(7).fill('')
let divs_esquerda = Array(6).fill('')
.map((el,i) => el + `<div>teste ${i+1}</div>`)

// divs_esquerda.shift()
console.log(divs_esquerda.length)

// INICIALIZADOR
const montador = ()=>{
    main_divs[0].innerHTML = ''
    main_divs[1].innerHTML = ''

    for (div of divs_esquerda)
        main_divs[0].innerHTML += div
    for (div of divs_direita)
        main_divs[1].innerHTML += div

}

switch_right_button.addEventListener('click', r => {
    divs_direita.push(divs_esquerda[0])
    divs_esquerda.shift()
    montador()
})

switch_left_button.addEventListener('click', t => {
    divs_esquerda.push(divs_direita[0])
    // divs_esquerda.splice(0,0,divs_direita[0])
    divs_direita.shift()
    montador()
})


montador()
