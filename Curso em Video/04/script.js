let current_hour = new Date().getHours()
let img = window.document.getElementById('iimg')
let txt_hour = window.document.getElementById('ix-hour')
let body = window.document.getElementsByTagName('body')[0]

// Para TESTES
// current_hour = 23

txt_hour.innerText = txt_hour.innerText.replace('x', String(current_hour))
console.log(`Hora atual -> ${current_hour}`)



if (current_hour < 6) {
    img.style.background = `url(Images/madruga.png)`
    body.style.backgroundColor = 'rgba(142, 151, 10, 0.726)'
}
else if (current_hour < 12) {
    img.style.background = `url(Images/morning.png)`
    body.style.backgroundColor = 'rgba(194, 140, 25, 0.73)'
}
else if (current_hour < 18) {
    img.style.background = `url(Images/evening.png)`
    body.style.backgroundColor = 'rgba(179, 77, 9, 0.767)'
}
else if (current_hour < 24) {
    img.style.background = `url(Images/night.png)`
    body.style.backgroundColor = 'rgba(6, 25, 131, 0.801)'
}
