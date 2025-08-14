let count = document.getElementById('ibegin')
let final_number = document.getElementById('iend')
let step_number = document.getElementById('istep')
let btn_send = document.getElementById('isend')
let result = document.getElementById('iresult')

btn_send.addEventListener('click', calculate)

function calculate() {
    count = Number(count.value)
    final_number = Number(final_number.value)
    step_number = Number(step_number.value)
    let aux_result = ``


    console.log(`count -> ${count}`)
    console.log(`final -> ${final_number}`)
    

    while (count <= final_number) {
        aux_result += `${count} ► `
        count += step_number
        
        if (count === final_number) {
            aux_result += count
            break
        }
    }
    
    console.log(`aux_result -> ${aux_result}`)
    result.innerHTML = aux_result
}


