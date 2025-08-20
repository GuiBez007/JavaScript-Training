const divs = [...document.querySelectorAll('div')]

divs.map(div=>{
    div.addEventListener('click', m=>{
        div.innerHTML = `<strong>Testado</strong>`
        div.classList.add("destaque")
    })
})