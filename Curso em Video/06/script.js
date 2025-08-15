// let txt_number = document.getElementById('inum')
let btn_button = document.getElementById('ibutton')
let txt_result = document.getElementById('iresult')
let txt_number2 = document.getElementById('inum')

btn_button.addEventListener('click',  () => calculate())
const calculate = () => {
    let txt_number = txt_number2
    txt_number = Number(txt_number.value)
    
    let result = ''

    for (let i=1; i<=10; i++) {
        result += `${txt_number} X ${i} = ${txt_number * i} <br>`
    }
    txt_result.innerHTML = result


}