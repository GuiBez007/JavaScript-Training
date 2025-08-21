const nome = document.querySelector('#inome')
const portas = document.querySelector('#iportas')
const blindagem = document.querySelector('#iblindagem')
const municao = document.querySelector('#imunicao')
const button = document.querySelector('#button')
const tipo = document.querySelector('#tipo')

let tipoSelecionado = 'normal'
let carros = []


class Carro {
    constructor(nome, portas) {
        this.nome = nome.value
        this.portas = portas.value
    }

    getNome() {
        return this.nome
    }
    setNome(nome) {
        this.nome = String(nome)
    }

    getPortas() {
        return this.portas
    }
    setPortas(portas) {
        this.portas = Number(portas)
    }
}


class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem.value
        this.municao = municao.value
    }

    getBlindagem() {
        return this.blindagem
    }
    setBlindagem(blindagem) {
        this.blindagem = Number(blindagem)
    }

    getMunicao() {
        return this.municao
    }
    setMunicao(municao) {
        this.municao = Number(municao)
    }
}


// Clique nos tipos
tipo.addEventListener('click', evt => {
    const radio = document.querySelector('input[name="radio"]:checked')
    tipoSelecionado = radio.value

    if (tipoSelecionado === 'normal') {
        blindagem.setAttribute('disabled', true)
        municao.setAttribute('disabled', true)
    }
    else if (tipoSelecionado === 'militar') {
        blindagem.removeAttribute('disabled')
        municao.removeAttribute('disabled')
    }
})


// Botão ADICIONAR
button.addEventListener('click', evt => {
    tipoSelecionado === 'normal'? 
        carros.push(new Carro(nome, portas)) : 
        carros.push(new Militar(nome, portas, blindagem, municao))

    

    console.clear()
    carros.forEach(carro => {
        console.log(carro)
    })
})




// OUTRA COISA
const teste = function(n,i) {
    this.nome = n
    this.idade = i
    this.getIdade = () => {return this.idade}
}

const pessoa1 = new teste('gui',22)
console.log(pessoa1.nome)

const pessoa2 = new teste('outro gui',20)
console.log(pessoa2.nome)
console.log(pessoa2.getIdade())
