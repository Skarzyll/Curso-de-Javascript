let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Convert() {
    let prom = prompt('Digite uma temperatura em °C.')

    if (prom == '') {
        alert('Valor inválido ou não inserido. Por favor, tente novamente.')
        
    } else {
        res.innerHTML = ''
        let celsi = Number(prom)
        let kelvin = celsi + 273.15
        let fah = (celsi * 9/5) + 32

        res2.innerHTML = `A temperatura de ${celsi.toLocaleString('pt-br')}°C, corresponde a...`
        res.appendChild(res2)

        res.innerHTML += `${kelvin.toLocaleString('pt-br')}K (Kelvin)<br>`

        res.innerHTML += `${fah.toLocaleString('pt-br')}°F (Fahrenheit)`
    }
}