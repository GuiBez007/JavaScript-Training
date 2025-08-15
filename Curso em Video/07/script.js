let inumber = document.getElementById('inum')
let ilist = document.getElementById('ilist')
let iresult = document.getElementById('iresult')

let msg = `Value x added`
let numbers = []
let bigger = null
let smaller = null
let first_time = true
let sum = 0

let ibutton = document.getElementById('ibutton')
let ifinish = document.getElementById('ifinish')
ibutton.addEventListener('click', addElement)
ifinish.addEventListener('click', seeResult)

function addElement() {
    iresult.innerText = ``
    let number = Number(inumber.value)

    if (first_time === true) {
        bigger = number
        smaller = number
    } else {
        if (number > bigger)
            bigger = number
        else if (number < smaller)
            smaller = number
    }

    sum += number
    numbers.push(number)

    let item = document.createElement('option')
    item.text = msg.replace('x', number)
    ilist.appendChild(item)
}

function seeResult() {
    iresult.innerHTML = `
        The total is ${numbers.length} <br>
        The bigger value is ${bigger} <br>
        The smaller value is ${smaller} <br>
        The sum of all values is ${sum} <br>
        The average of all values is ${sum / numbers.length}
    `
}




