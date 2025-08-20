let result = document.querySelector('#result')
let numbers = [...document.querySelectorAll('#numbers > div')]
const default_values = 'C◄%/789x456-123+0.='

numbers.map((n,i) => {
    n.innerText = default_values[i]
    n.addEventListener('click', () => {
        switch (n.innerText) {
            case default_values[0]: // C
                result.innerText = ''
                break
            case default_values[1]: // ◄
                result.innerText = String(result.innerText).slice(0, -1)
                break
            case default_values[2]: // %
                // Nem eu sei usar esse sinal na calculadora real ☺
            case default_values[18]: // =
                try {result.innerText = eval(String(result.innerText).replace('x', '*'))} 
                catch {result.innerText = 'Syntax Error!'}
                break
            default:
                result.innerText += n.innerText
                break
        }
    })
})